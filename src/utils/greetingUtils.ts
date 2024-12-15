import { GreetingConfig } from '../types/greeting';

export const greetingConfigs: GreetingConfig[] = [
  { text: 'Good Morning', emoji: '☀️', startHour: 6, endHour: 12 },
  { text: 'Good Afternoon', emoji: '🌤️', startHour: 12, endHour: 17 },
  { text: 'Good Evening', emoji: '🌙', startHour: 17, endHour: 21 },
  { text: 'Good Night', emoji: '🌌', startHour: 21, endHour: 6 }
];

export const getCurrentGreeting = (): GreetingConfig => {
  const hour = new Date().getHours();
  return (
    greetingConfigs.find(
      config =>
        (config.startHour < config.endHour
          ? hour >= config.startHour && hour < config.endHour
          : hour >= config.startHour || hour < config.endHour)
    ) ?? greetingConfigs[0]
  );
};