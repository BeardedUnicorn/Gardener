CREATE TABLE IF NOT EXISTS plantings (
  id TEXT PRIMARY KEY NOT NULL,
  display_name TEXT NOT NULL,
  species TEXT NOT NULL,
  quantity INTEGER NOT NULL,
  location_type TEXT NOT NULL CHECK (location_type IN ('pot', 'bed', 'ground')),
  zone_name TEXT,
  base_interval_days INTEGER NOT NULL,
  notes TEXT,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL,
  archived_at TEXT
);

CREATE TABLE IF NOT EXISTS watering_events (
  id TEXT PRIMARY KEY NOT NULL,
  planting_id TEXT NOT NULL,
  watered_at TEXT NOT NULL,
  note TEXT,
  FOREIGN KEY (planting_id) REFERENCES plantings(id) ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS idx_watering_events_planting_time
  ON watering_events (planting_id, watered_at DESC);

CREATE TABLE IF NOT EXISTS settings (
  id INTEGER PRIMARY KEY CHECK (id = 1),
  latitude REAL NOT NULL,
  longitude REAL NOT NULL,
  timezone TEXT NOT NULL,
  location_label TEXT NOT NULL,
  notifications_enabled INTEGER NOT NULL DEFAULT 1,
  last_weather_sync_at TEXT
);

CREATE TABLE IF NOT EXISTS weather_cache (
  id INTEGER PRIMARY KEY CHECK (id = 1),
  location_label TEXT NOT NULL,
  latitude REAL NOT NULL,
  longitude REAL NOT NULL,
  timezone TEXT NOT NULL,
  past_24h_rain_mm REAL NOT NULL,
  next_24h_rain_mm REAL NOT NULL,
  max_temp_c REAL NOT NULL,
  max_wind_kph REAL NOT NULL,
  fetched_at TEXT NOT NULL,
  is_stale INTEGER NOT NULL DEFAULT 0,
  payload_json TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS schedule_snapshots (
  planting_id TEXT PRIMARY KEY NOT NULL,
  baseline_due_at TEXT NOT NULL,
  effective_due_at TEXT NOT NULL,
  status TEXT NOT NULL CHECK (status IN ('overdue', 'due_today', 'upcoming')),
  adjustment_reason TEXT,
  FOREIGN KEY (planting_id) REFERENCES plantings(id) ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS idx_schedule_snapshots_status_due
  ON schedule_snapshots (status, effective_due_at ASC);
