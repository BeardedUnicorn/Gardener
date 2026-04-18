import { useEffect, useEffectEvent, useState } from "react";
import {
  Alert,
  Box,
  Button,
  Chip,
  CircularProgress,
  CssBaseline,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  List,
  ListItem,
  ListItemText,
  Paper,
  Stack,
  Switch,
  TextField,
  ThemeProvider,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import LocalFloristRoundedIcon from "@mui/icons-material/LocalFloristRounded";
import OpacityRoundedIcon from "@mui/icons-material/OpacityRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import TimelineRoundedIcon from "@mui/icons-material/TimelineRounded";
import WaterDropRoundedIcon from "@mui/icons-material/WaterDropRounded";
import { format, formatDistanceToNowStrict } from "date-fns";
import { locationIntervalHints, locationLabels } from "./domain/defaults";
import type { LocationType, PlantingEntry } from "./domain/types";
import { createDesktopGardenManager } from "./services/createDesktopGardenManager";
import type {
  DashboardItem,
  GardenAppState,
  GardenManager,
} from "./services/gardenManager";
import type { LocationService } from "./services/locationService";
import { RuntimeLocationService } from "./services/runtimeLocationService";
import { appTheme } from "./theme";

type AppScreen = "dashboard" | "plantings" | "history" | "settings";

interface PlantingDraft {
  displayName: string;
  species: string;
  quantity: string;
  locationType: LocationType;
  zoneName: string;
  baseIntervalDays: string;
  notes: string;
}

interface SettingsDraft {
  locationLabel: string;
  latitude: string;
  longitude: string;
  timezone: string;
  notificationsEnabled: boolean;
}

interface AppProps {
  manager?: GardenManager;
  locationService?: LocationService;
  initialScreen?: AppScreen;
}

function App({
  manager,
  locationService,
  initialScreen = "dashboard",
}: AppProps) {
  const [resolvedManager, setResolvedManager] = useState<GardenManager | null>(
    manager ?? null,
  );
  const [resolvedLocationService] = useState<LocationService>(
    () => locationService ?? new RuntimeLocationService(),
  );
  const [activeScreen, setActiveScreen] = useState<AppScreen>(initialScreen);
  const [appState, setAppState] = useState<GardenAppState | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [busyLabel, setBusyLabel] = useState<string | null>(null);
  const [settingsDraft, setSettingsDraft] = useState<SettingsDraft>(
    createSettingsDraft(),
  );
  const [isPlantingDialogOpen, setIsPlantingDialogOpen] = useState(false);
  const [editingPlantingId, setEditingPlantingId] = useState<string | null>(null);
  const [plantingDraft, setPlantingDraft] = useState<PlantingDraft>(
    createPlantingDraft(),
  );

  useEffect(() => {
    let active = true;

    if (manager) {
      setResolvedManager(manager);
      return () => {
        active = false;
      };
    }

    void (async () => {
      const desktopManager = await createDesktopGardenManager();

      if (active) {
        setResolvedManager(desktopManager);
      }
    })();

    return () => {
      active = false;
    };
  }, [manager]);

  const loadState = useEffectEvent(async () => {
    if (!resolvedManager) {
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const nextState = await resolvedManager.loadState();
      setAppState(nextState);
      setSettingsDraft(createSettingsDraft(nextState));
    } catch (cause) {
      setError(getErrorMessage(cause));
    } finally {
      setIsLoading(false);
    }
  });

  useEffect(() => {
    if (!resolvedManager) {
      return;
    }

    void loadState();
  }, [resolvedManager]);

  const handleForegroundRefresh = useEffectEvent(async () => {
    if (!resolvedManager || isLoading) {
      return;
    }

    await loadState();
  });

  useEffect(() => {
    const onFocus = () => {
      void handleForegroundRefresh();
    };
    const onVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        void handleForegroundRefresh();
      }
    };

    window.addEventListener("focus", onFocus);
    document.addEventListener("visibilitychange", onVisibilityChange);

    return () => {
      window.removeEventListener("focus", onFocus);
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, []);

  async function runAction(
    label: string,
    action: () => Promise<GardenAppState>,
  ): Promise<void> {
    setBusyLabel(label);
    setError(null);

    try {
      const nextState = await action();
      setAppState(nextState);
      setSettingsDraft(createSettingsDraft(nextState));
    } catch (cause) {
      setError(getErrorMessage(cause));
    } finally {
      setBusyLabel(null);
    }
  }

  function openCreatePlantingDialog(): void {
    setEditingPlantingId(null);
    setPlantingDraft(createPlantingDraft());
    setIsPlantingDialogOpen(true);
  }

  function openEditPlantingDialog(planting: PlantingEntry): void {
    setEditingPlantingId(planting.id);
    setPlantingDraft(createPlantingDraft(planting));
    setIsPlantingDialogOpen(true);
  }

  async function handleSavePlanting(): Promise<void> {
    if (!resolvedManager) {
      return;
    }

    const payload = {
      displayName: plantingDraft.displayName.trim(),
      species: plantingDraft.species.trim(),
      quantity: Number(plantingDraft.quantity),
      locationType: plantingDraft.locationType,
      zoneName: plantingDraft.zoneName.trim() || null,
      baseIntervalDays: Number(plantingDraft.baseIntervalDays),
      notes: plantingDraft.notes.trim() || null,
    };

    if (!payload.displayName || !payload.species || Number.isNaN(payload.quantity)) {
      setError("Display name, species, and quantity are required.");
      return;
    }

    if (Number.isNaN(payload.baseIntervalDays) || payload.baseIntervalDays < 1) {
      setError("Base interval days must be at least 1.");
      return;
    }

    if (editingPlantingId) {
      const existing = appState?.plantings.find(
        (planting) => planting.id === editingPlantingId,
      );

      if (!existing) {
        setError("The planting you tried to edit no longer exists.");
        return;
      }

      await runAction("Saving planting", () =>
        resolvedManager.updatePlanting(editingPlantingId, {
          ...existing,
          ...payload,
        }),
      );
    } else {
      await runAction("Saving planting", () => resolvedManager.createPlanting(payload));
    }

    setIsPlantingDialogOpen(false);
    setActiveScreen("plantings");
  }

  async function handleSaveSettings(): Promise<void> {
    if (!resolvedManager) {
      return;
    }

    const latitude = Number(settingsDraft.latitude);
    const longitude = Number(settingsDraft.longitude);

    if (
      !settingsDraft.locationLabel.trim() ||
      Number.isNaN(latitude) ||
      Number.isNaN(longitude) ||
      !settingsDraft.timezone.trim()
    ) {
      setError("Location label, latitude, longitude, and timezone are required.");
      return;
    }

    await runAction("Saving settings", () =>
      resolvedManager.saveSettings({
        latitude,
        longitude,
        timezone: settingsDraft.timezone.trim(),
        locationLabel: settingsDraft.locationLabel.trim(),
        notificationsEnabled: settingsDraft.notificationsEnabled,
        lastWeatherSyncAt: appState?.settings?.lastWeatherSyncAt ?? null,
      }),
    );
  }

  async function handleUseCurrentLocation(): Promise<void> {
    setBusyLabel("Detecting location");
    setError(null);

    try {
      const location = await resolvedLocationService.detectCurrentLocation();

      setSettingsDraft((current) => ({
        ...current,
        locationLabel: location.locationLabel,
        latitude: String(location.latitude),
        longitude: String(location.longitude),
        timezone: location.timezone,
      }));
    } catch (cause) {
      setError(getErrorMessage(cause));
    } finally {
      setBusyLabel(null);
    }
  }

  const shellContent =
    !resolvedManager || (isLoading && !appState) ? (
      <LoadingShell />
    ) : (
      <Box
        sx={{
          minHeight: "100vh",
          px: { xs: 2, md: 3 },
          py: { xs: 2, md: 3 },
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", lg: "280px minmax(0, 1fr)" },
            gap: 2,
          }}
        >
          <Paper
            elevation={0}
            sx={{
              p: 2.5,
              border: "1px solid",
              borderColor: "divider",
              bgcolor: "rgba(247, 242, 232, 0.82)",
              backdropFilter: "blur(18px)",
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <Stack spacing={1}>
              <Typography variant="overline" sx={{ color: "text.secondary" }}>
                Garden Watering Tracker
              </Typography>
              <Typography variant="h2">Gardener</Typography>
              <Typography color="text.secondary">
                Soil-aware reminders for pots, beds, and in-ground plantings.
              </Typography>
            </Stack>
            <Divider />
            <Stack
              component="nav"
              aria-label="Primary navigation"
              direction={{ xs: "row", lg: "column" }}
              spacing={1}
              flexWrap="wrap"
            >
              {navigationItems.map((item) => {
                const selected = activeScreen === item.value;

                return (
                  <Button
                    key={item.value}
                    color={selected ? "primary" : "inherit"}
                    variant={selected ? "contained" : "text"}
                    startIcon={<item.icon />}
                    onClick={() => setActiveScreen(item.value)}
                    sx={{
                      justifyContent: "flex-start",
                      color: selected ? "primary.contrastText" : "text.primary",
                    }}
                  >
                    {item.label}
                  </Button>
                );
              })}
            </Stack>
            <Box sx={{ mt: "auto" }}>
              <Paper
                elevation={0}
                sx={{
                  p: 2,
                  borderRadius: 4,
                  border: "1px solid",
                  borderColor: "divider",
                  bgcolor: "rgba(48, 95, 77, 0.08)",
                }}
              >
                <Typography variant="subtitle2">Reminder posture</Typography>
                <Typography variant="body2" color="text.secondary">
                  Notifications send only while the app is open, and the next digest
                  waits for real schedule changes.
                </Typography>
              </Paper>
            </Box>
          </Paper>

          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {error ? <Alert severity="error">{error}</Alert> : null}
            <Header
              activeScreen={activeScreen}
              onAddPlanting={openCreatePlantingDialog}
              isBusy={Boolean(busyLabel)}
              lastSyncAt={appState?.settings?.lastWeatherSyncAt ?? null}
            />
            {appState ? (
              <ScreenContent
                activeScreen={activeScreen}
                state={appState}
                settingsDraft={settingsDraft}
                isBusy={Boolean(busyLabel)}
                onChangeSettings={setSettingsDraft}
                onEditPlanting={openEditPlantingDialog}
                onArchivePlanting={(plantingId) =>
                  void runAction("Archiving planting", () =>
                    resolvedManager.archivePlanting(plantingId),
                  )
                }
                onWaterNow={(plantingId) =>
                  void runAction("Logging watering", () =>
                    resolvedManager.waterNow(plantingId),
                  )
                }
                onSaveSettings={() => void handleSaveSettings()}
                onUseCurrentLocation={() => void handleUseCurrentLocation()}
                onRefreshWeather={() => void runAction("Refreshing weather", () => resolvedManager.loadState())}
                onAddPlanting={openCreatePlantingDialog}
              />
            ) : null}
          </Box>
        </Box>
      </Box>
    );

  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline />
      {shellContent}
      <PlantingDialog
        open={isPlantingDialogOpen}
        draft={plantingDraft}
        editing={Boolean(editingPlantingId)}
        onClose={() => setIsPlantingDialogOpen(false)}
        onChange={setPlantingDraft}
        onSave={() => void handleSavePlanting()}
      />
    </ThemeProvider>
  );
}

function LoadingShell() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        px: 3,
      }}
    >
      <Paper
        elevation={0}
        sx={{
          px: 4,
          py: 5,
          borderRadius: 5,
          border: "1px solid",
          borderColor: "divider",
          textAlign: "center",
          bgcolor: "rgba(247, 242, 232, 0.84)",
        }}
      >
        <CircularProgress size={30} />
        <Typography variant="h3" sx={{ mt: 2 }}>
          Preparing your watering board
        </Typography>
        <Typography color="text.secondary" sx={{ mt: 1 }}>
          Loading plantings, weather, and today&apos;s due list.
        </Typography>
      </Paper>
    </Box>
  );
}

function Header(props: {
  activeScreen: AppScreen;
  onAddPlanting: () => void;
  isBusy: boolean;
  lastSyncAt: string | null;
}) {
  return (
    <Paper
      elevation={0}
      sx={{
        p: { xs: 2.5, md: 3 },
        border: "1px solid",
        borderColor: "divider",
        bgcolor: "rgba(247, 242, 232, 0.86)",
      }}
    >
      <Stack
        direction={{ xs: "column", md: "row" }}
        alignItems={{ xs: "flex-start", md: "center" }}
        justifyContent="space-between"
        spacing={2}
      >
        <Box>
          <Typography variant="h1" sx={{ fontSize: { xs: "2.4rem", md: "3.3rem" } }}>
            {screenTitles[props.activeScreen]}
          </Typography>
          <Typography color="text.secondary">
            {props.lastSyncAt
              ? `Last weather sync ${formatDistanceToNowStrict(new Date(props.lastSyncAt), {
                  addSuffix: true,
                })}`
              : "No weather sync yet"}
          </Typography>
        </Box>
        <Button
          variant="contained"
          startIcon={<AddRoundedIcon />}
          onClick={props.onAddPlanting}
          disabled={props.isBusy}
        >
          Add Planting
        </Button>
      </Stack>
    </Paper>
  );
}

function ScreenContent(props: {
  activeScreen: AppScreen;
  state: GardenAppState;
  settingsDraft: SettingsDraft;
  isBusy: boolean;
  onChangeSettings: React.Dispatch<React.SetStateAction<SettingsDraft>>;
  onWaterNow: (plantingId: string) => void;
  onEditPlanting: (planting: PlantingEntry) => void;
  onArchivePlanting: (plantingId: string) => void;
  onSaveSettings: () => void;
  onUseCurrentLocation: () => void;
  onRefreshWeather: () => void;
  onAddPlanting: () => void;
}) {
  if (props.activeScreen === "dashboard") {
    return (
      <Stack spacing={2}>
        <WeatherStrip weather={props.state.weather} />
        <ScheduleSection
          title="Overdue"
          items={props.state.dashboard.overdue}
          emptyCopy="Nothing has slipped past its watering window."
          onWaterNow={props.onWaterNow}
          onEditPlanting={props.onEditPlanting}
          onArchivePlanting={props.onArchivePlanting}
        />
        <ScheduleSection
          title="Due Today"
          items={props.state.dashboard.dueToday}
          emptyCopy="Nothing needs water today."
          onWaterNow={props.onWaterNow}
          onEditPlanting={props.onEditPlanting}
          onArchivePlanting={props.onArchivePlanting}
        />
        <ScheduleSection
          title="Upcoming"
          items={props.state.dashboard.upcoming}
          emptyCopy="Add a planting to start building a schedule."
          onWaterNow={props.onWaterNow}
          onEditPlanting={props.onEditPlanting}
          onArchivePlanting={props.onArchivePlanting}
        />
      </Stack>
    );
  }

  if (props.activeScreen === "plantings") {
    return (
      <Paper
        elevation={0}
        sx={{
          p: { xs: 2, md: 3 },
          border: "1px solid",
          borderColor: "divider",
          bgcolor: "rgba(247, 242, 232, 0.86)",
        }}
      >
        <Stack spacing={2}>
          {props.state.plantings.length === 0 ? (
            <EmptyPanel
              title="No plantings yet"
              body="Start with a few grouped entries, then let weather and watering history tune the dashboard."
              actionLabel="Add Planting"
              onAction={props.onAddPlanting}
            />
          ) : (
            props.state.plantings.map((planting) => {
              const snapshot = props.state.snapshots.find(
                (item) => item.plantingId === planting.id,
              );

              return (
                <PlantingCard
                  key={planting.id}
                  planting={planting}
                  snapshotSummary={snapshot?.adjustmentReason ?? "No weather adjustment"}
                  cadenceLabel={`Every ${planting.baseIntervalDays} day${
                    planting.baseIntervalDays === 1 ? "" : "s"
                  }`}
                  onEdit={() => props.onEditPlanting(planting)}
                  onArchive={() => props.onArchivePlanting(planting.id)}
                />
              );
            })
          )}
        </Stack>
      </Paper>
    );
  }

  if (props.activeScreen === "history") {
    return (
      <Paper
        elevation={0}
        sx={{
          p: { xs: 2, md: 3 },
          border: "1px solid",
          borderColor: "divider",
          bgcolor: "rgba(247, 242, 232, 0.86)",
        }}
      >
        {props.state.history.length === 0 ? (
          <EmptyPanel
            title="No watering history"
            body="Use the dashboard quick action to log the next watering and build your recent timeline."
          />
        ) : (
          <List aria-label="Watering history" sx={{ p: 0 }}>
            {props.state.history.map((historyItem) => (
              <ListItem
                key={historyItem.event.id}
                sx={{
                  px: 0,
                  py: 1.5,
                  borderBottom: "1px solid",
                  borderColor: "divider",
                  alignItems: "flex-start",
                }}
              >
                <ListItemText
                  primary={historyItem.plantingDisplayName}
                  secondary={`${format(
                    new Date(historyItem.event.wateredAt),
                    "MMM d, yyyy h:mm a",
                  )}${
                    historyItem.event.note ? ` • ${historyItem.event.note}` : ""
                  }`}
                />
              </ListItem>
            ))}
          </List>
        )}
      </Paper>
    );
  }

  return (
    <Paper
      elevation={0}
      sx={{
        p: { xs: 2, md: 3 },
        border: "1px solid",
        borderColor: "divider",
        bgcolor: "rgba(247, 242, 232, 0.86)",
      }}
    >
      <Stack spacing={3}>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={2}
          alignItems={{ xs: "flex-start", md: "center" }}
          justifyContent="space-between"
        >
          <Box>
            <Typography variant="h3">Garden settings</Typography>
            <Typography color="text.secondary">
              One location drives weather adjustments for the whole garden.
            </Typography>
          </Box>
          <Stack direction="row" spacing={1}>
            <Button
              variant="text"
              onClick={props.onUseCurrentLocation}
              disabled={props.isBusy}
            >
              Use current location
            </Button>
            <Button
              variant="outlined"
              onClick={props.onRefreshWeather}
              disabled={props.isBusy}
            >
              Refresh weather
            </Button>
            <Button
              variant="contained"
              onClick={props.onSaveSettings}
              disabled={props.isBusy}
            >
              Save settings
            </Button>
          </Stack>
        </Stack>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(2, minmax(0, 1fr))" },
            gap: 2,
          }}
        >
          <TextField
            label="Location label"
            value={props.settingsDraft.locationLabel}
            onChange={(event) =>
              props.onChangeSettings((current) => ({
                ...current,
                locationLabel: event.target.value,
              }))
            }
          />
          <TextField
            label="Timezone"
            value={props.settingsDraft.timezone}
            onChange={(event) =>
              props.onChangeSettings((current) => ({
                ...current,
                timezone: event.target.value,
              }))
            }
          />
          <TextField
            label="Latitude"
            value={props.settingsDraft.latitude}
            onChange={(event) =>
              props.onChangeSettings((current) => ({
                ...current,
                latitude: event.target.value,
              }))
            }
          />
          <TextField
            label="Longitude"
            value={props.settingsDraft.longitude}
            onChange={(event) =>
              props.onChangeSettings((current) => ({
                ...current,
                longitude: event.target.value,
              }))
            }
          />
        </Box>
        <Paper
          elevation={0}
          sx={{
            p: 2,
            borderRadius: 4,
            border: "1px dashed",
            borderColor: "divider",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 2,
          }}
        >
          <Box>
            <Typography variant="subtitle1">Desktop notifications</Typography>
            <Typography color="text.secondary">
              Ask for permission once, then only send digests when the due list changes.
            </Typography>
          </Box>
          <Switch
            checked={props.settingsDraft.notificationsEnabled}
            onChange={(event) =>
              props.onChangeSettings((current) => ({
                ...current,
                notificationsEnabled: event.target.checked,
              }))
            }
          />
        </Paper>
      </Stack>
    </Paper>
  );
}

function WeatherStrip(props: { weather: GardenAppState["weather"] }) {
  if (!props.weather) {
    return (
      <Paper
        elevation={0}
        sx={{
          p: 2.5,
          border: "1px dashed",
          borderColor: "divider",
          bgcolor: "rgba(247, 242, 232, 0.78)",
        }}
      >
        <Typography variant="subtitle1">Weather adjustments are waiting on a garden location.</Typography>
        <Typography color="text.secondary">
          Save a latitude, longitude, and timezone in Settings, or use current location, to start weather-aware due dates.
        </Typography>
      </Paper>
    );
  }

  return (
    <Paper
      elevation={0}
      sx={{
        p: { xs: 2.5, md: 3 },
        border: "1px solid",
        borderColor: "divider",
        bgcolor: "rgba(48, 95, 77, 0.08)",
      }}
    >
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={2}
        alignItems={{ xs: "flex-start", md: "center" }}
        justifyContent="space-between"
      >
        <Box>
          <Stack direction="row" spacing={1} alignItems="center">
            <Typography variant="h3" sx={{ fontSize: "1.5rem" }}>
              {props.weather.locationLabel}
            </Typography>
            {props.weather.isStale ? <Chip label="Stale" color="warning" size="small" /> : null}
          </Stack>
          <Typography color="text.secondary">
            Synced {formatDistanceToNowStrict(new Date(props.weather.fetchedAt), {
              addSuffix: true,
            })}
          </Typography>
        </Box>
        <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5}>
          <MetricChip label={`Rain (24h) ${props.weather.past24hRainMm}mm`} />
          <MetricChip label={`Rain (next) ${props.weather.next24hRainMm}mm`} />
          <MetricChip label={`High ${props.weather.maxTempC}°C`} />
          <MetricChip label={`Wind ${props.weather.maxWindKph}kph`} />
        </Stack>
      </Stack>
    </Paper>
  );
}

function MetricChip(props: { label: string }) {
  return (
    <Chip
      label={props.label}
      sx={{
        bgcolor: "rgba(247, 242, 232, 0.9)",
        border: "1px solid",
        borderColor: "divider",
      }}
    />
  );
}

function ScheduleSection(props: {
  title: string;
  items: DashboardItem[];
  emptyCopy: string;
  onWaterNow: (plantingId: string) => void;
  onEditPlanting: (planting: PlantingEntry) => void;
  onArchivePlanting: (plantingId: string) => void;
}) {
  return (
    <Paper
      component="section"
      role="region"
      aria-label={props.title}
      elevation={0}
      sx={{
        p: { xs: 2, md: 3 },
        border: "1px solid",
        borderColor: "divider",
        bgcolor: "rgba(247, 242, 232, 0.86)",
      }}
    >
      <Stack spacing={2}>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Typography variant="h3">{props.title}</Typography>
          <Chip
            label={`${props.items.length} entries`}
            color={props.title === "Overdue" ? "error" : "default"}
          />
        </Stack>
        {props.items.length === 0 ? (
          <Typography color="text.secondary">{props.emptyCopy}</Typography>
        ) : (
          props.items.map((item) => (
            <ScheduleCard
              key={item.planting.id}
              item={item}
              onWaterNow={() => props.onWaterNow(item.planting.id)}
              onEdit={() => props.onEditPlanting(item.planting)}
              onArchive={() => props.onArchivePlanting(item.planting.id)}
            />
          ))
        )}
      </Stack>
    </Paper>
  );
}

function ScheduleCard(props: {
  item: DashboardItem;
  onWaterNow: () => void;
  onEdit: () => void;
  onArchive: () => void;
}) {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 2.25,
        borderRadius: 4,
        border: "1px solid",
        borderColor: "divider",
        bgcolor: "rgba(255,255,255,0.52)",
      }}
    >
      <Stack spacing={1.5}>
        <Stack
          direction={{ xs: "column", md: "row" }}
          justifyContent="space-between"
          spacing={1.5}
        >
          <Box>
            <Typography variant="h3" sx={{ fontSize: "1.3rem" }}>
              {props.item.planting.displayName}
            </Typography>
            <Typography color="text.secondary">
              {props.item.planting.species} • {props.item.planting.quantity} in{" "}
              {locationLabels[props.item.planting.locationType].toLowerCase()}
            </Typography>
          </Box>
          <Stack direction="row" spacing={1} flexWrap="wrap">
            <Chip label={`Due ${format(new Date(props.item.schedule.effectiveDueAt), "MMM d")}`} />
            <Chip
              label={`Every ${props.item.planting.baseIntervalDays} day${
                props.item.planting.baseIntervalDays === 1 ? "" : "s"
              }`}
            />
          </Stack>
        </Stack>
        <Typography color="text.secondary">
          {props.item.schedule.adjustmentReason ?? "No weather adjustment in effect"}
        </Typography>
        <Stack direction="row" spacing={1} flexWrap="wrap">
          <Button
            variant="contained"
            startIcon={<OpacityRoundedIcon />}
            onClick={props.onWaterNow}
          >
            Watered now
          </Button>
          <Button
            variant="outlined"
            startIcon={<EditRoundedIcon />}
            onClick={props.onEdit}
          >
            Edit
          </Button>
          <Button variant="text" color="inherit" onClick={props.onArchive}>
            Archive
          </Button>
        </Stack>
      </Stack>
    </Paper>
  );
}

function PlantingCard(props: {
  planting: PlantingEntry;
  cadenceLabel: string;
  snapshotSummary: string;
  onEdit: () => void;
  onArchive: () => void;
}) {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 2.25,
        borderRadius: 4,
        border: "1px solid",
        borderColor: "divider",
        bgcolor: "rgba(255,255,255,0.52)",
      }}
    >
      <Stack spacing={1.5}>
        <Stack
          direction={{ xs: "column", md: "row" }}
          justifyContent="space-between"
          spacing={1}
        >
          <Box>
            <Typography variant="h3" sx={{ fontSize: "1.25rem" }}>
              {props.planting.displayName}
            </Typography>
            <Typography color="text.secondary">
              {props.planting.species} • {props.planting.quantity} •{" "}
              {locationLabels[props.planting.locationType]}
            </Typography>
          </Box>
          <Stack direction="row" spacing={1} flexWrap="wrap">
            <Chip label={locationLabels[props.planting.locationType]} />
            <Chip label={props.cadenceLabel} />
          </Stack>
        </Stack>
        <Typography color="text.secondary">{props.snapshotSummary}</Typography>
        {props.planting.zoneName ? (
          <Typography color="text.secondary">
            Zone: {props.planting.zoneName}
          </Typography>
        ) : null}
        <Stack direction="row" spacing={1}>
          <Button variant="outlined" onClick={props.onEdit}>
            Edit
          </Button>
          <Button variant="text" color="inherit" onClick={props.onArchive}>
            Archive
          </Button>
        </Stack>
      </Stack>
    </Paper>
  );
}

function EmptyPanel(props: {
  title: string;
  body: string;
  actionLabel?: string;
  onAction?: () => void;
}) {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 3,
        borderRadius: 4,
        border: "1px dashed",
        borderColor: "divider",
        textAlign: "center",
        bgcolor: "rgba(255,255,255,0.32)",
      }}
    >
      <Typography variant="h3">{props.title}</Typography>
      <Typography color="text.secondary" sx={{ mt: 1.5, mb: props.actionLabel ? 2 : 0 }}>
        {props.body}
      </Typography>
      {props.actionLabel && props.onAction ? (
        <Button variant="contained" onClick={props.onAction}>
          {props.actionLabel}
        </Button>
      ) : null}
    </Paper>
  );
}

function PlantingDialog(props: {
  open: boolean;
  draft: PlantingDraft;
  editing: boolean;
  onClose: () => void;
  onChange: React.Dispatch<React.SetStateAction<PlantingDraft>>;
  onSave: () => void;
}) {
  return (
    <Dialog open={props.open} onClose={props.onClose} fullWidth maxWidth="sm">
      <DialogTitle>{props.editing ? "Edit planting" : "Add planting"}</DialogTitle>
      <DialogContent sx={{ pt: 1 }}>
        <Stack spacing={2} sx={{ mt: 1 }}>
          <TextField
            label="Display name"
            value={props.draft.displayName}
            onChange={(event) =>
              props.onChange((current) => ({
                ...current,
                displayName: event.target.value,
              }))
            }
          />
          <TextField
            label="Species"
            value={props.draft.species}
            onChange={(event) =>
              props.onChange((current) => ({
                ...current,
                species: event.target.value,
              }))
            }
          />
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "repeat(2, minmax(0, 1fr))" },
              gap: 2,
            }}
          >
            <TextField
              label="Quantity"
              type="number"
              value={props.draft.quantity}
              onChange={(event) =>
                props.onChange((current) => ({
                  ...current,
                  quantity: event.target.value,
                }))
              }
            />
            <TextField
              label="Base interval days"
              type="number"
              value={props.draft.baseIntervalDays}
              onChange={(event) =>
                props.onChange((current) => ({
                  ...current,
                  baseIntervalDays: event.target.value,
                }))
              }
            />
          </Box>
          <Box>
            <Typography variant="subtitle2" sx={{ mb: 1 }}>
              Location
            </Typography>
            <ToggleButtonGroup
              color="primary"
              exclusive
              value={props.draft.locationType}
              onChange={(_, nextValue: LocationType | null) => {
                if (!nextValue) {
                  return;
                }

                props.onChange((current) => ({
                  ...current,
                  locationType: nextValue,
                  baseIntervalDays:
                    props.editing && current.baseIntervalDays
                      ? current.baseIntervalDays
                      : String(locationIntervalHints[nextValue]),
                }));
              }}
            >
              {(["pot", "bed", "ground"] as LocationType[]).map((value) => (
                <ToggleButton key={value} value={value} aria-label={locationLabels[value]}>
                  {locationLabels[value]}
                </ToggleButton>
              ))}
            </ToggleButtonGroup>
          </Box>
          <TextField
            label="Zone name"
            value={props.draft.zoneName}
            onChange={(event) =>
              props.onChange((current) => ({
                ...current,
                zoneName: event.target.value,
              }))
            }
          />
          <TextField
            label="Notes"
            multiline
            minRows={3}
            value={props.draft.notes}
            onChange={(event) =>
              props.onChange((current) => ({
                ...current,
                notes: event.target.value,
              }))
            }
          />
        </Stack>
      </DialogContent>
      <DialogActions sx={{ px: 3, pb: 3 }}>
        <Button onClick={props.onClose}>Cancel</Button>
        <Button variant="contained" onClick={props.onSave}>
          Save planting
        </Button>
      </DialogActions>
    </Dialog>
  );
}

function createPlantingDraft(entry?: PlantingEntry): PlantingDraft {
  if (entry) {
    return {
      displayName: entry.displayName,
      species: entry.species,
      quantity: String(entry.quantity),
      locationType: entry.locationType,
      zoneName: entry.zoneName ?? "",
      baseIntervalDays: String(entry.baseIntervalDays),
      notes: entry.notes ?? "",
    };
  }

  return {
    displayName: "",
    species: "",
    quantity: "1",
    locationType: "pot",
    zoneName: "",
    baseIntervalDays: String(locationIntervalHints.pot),
    notes: "",
  };
}

function createSettingsDraft(state?: GardenAppState | null): SettingsDraft {
  return {
    locationLabel: state?.settings?.locationLabel ?? "",
    latitude: state?.settings ? String(state.settings.latitude) : "",
    longitude: state?.settings ? String(state.settings.longitude) : "",
    timezone: state?.settings?.timezone ?? "America/Boise",
    notificationsEnabled: state?.settings?.notificationsEnabled ?? false,
  };
}

function getErrorMessage(cause: unknown): string {
  if (cause instanceof Error) {
    return cause.message;
  }

  if (typeof cause === "string" && cause.trim()) {
    return cause;
  }

  if (
    typeof cause === "object" &&
    cause !== null &&
    "message" in cause &&
    typeof cause.message === "string" &&
    cause.message.trim()
  ) {
    return cause.message;
  }

  try {
    const serialized = JSON.stringify(cause);

    return serialized && serialized !== "{}"
      ? serialized
      : "Something went wrong.";
  } catch {
    return "Something went wrong.";
  }
}

const navigationItems: Array<{
  label: string;
  value: AppScreen;
  icon: typeof TimelineRoundedIcon;
}> = [
  { label: "Dashboard", value: "dashboard", icon: TimelineRoundedIcon },
  { label: "Plantings", value: "plantings", icon: LocalFloristRoundedIcon },
  { label: "History", value: "history", icon: WaterDropRoundedIcon },
  { label: "Settings", value: "settings", icon: SettingsRoundedIcon },
];

const screenTitles: Record<AppScreen, string> = {
  dashboard: "Watering Board",
  plantings: "Plantings",
  history: "History",
  settings: "Settings",
};

export default App;
