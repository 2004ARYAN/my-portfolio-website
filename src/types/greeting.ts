export interface GreetingConfig {
  text: string;
  emoji: string;
  startHour: number;
  endHour: number;
}

export interface AnimatedTextProps {
  text: string;
  className?: string;
}