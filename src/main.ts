import type { GameSettings } from './core/types.ts';
import { loadRecords } from './storage/recordsStorage.ts';
import { createGameScreen } from './ui/gameScreen.ts';
import { createRecordsTable } from './ui/recordsTable.ts';
import { createSettingsScreen } from './ui/settingsScreen.ts';

const app = document.createElement('div');
document.body.append(app);

const showSettings = (): void => {
  app.replaceChildren(createSettingsScreen(showGame), createRecordsTable(loadRecords()));
};

const showGame = (settings: GameSettings): void => {
  app.replaceChildren(createGameScreen(settings, showSettings));
};

showSettings();
