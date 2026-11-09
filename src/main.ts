import { createSettingsScreen } from './ui/settingsScreen.ts';

document.body.append(createSettingsScreen((settings) => console.log(settings)));
