import { cn } from "@sglara/cn";
import { type JSX } from "react";
import { RiCalendarView } from "react-icons/ri";
import { RiArrowDownSLine } from "react-icons/ri";
import { RiCalendarTodoLine } from "react-icons/ri";
import { RiCalendarLine } from "react-icons/ri";

interface IRadioCard {
  size: "sm" | "md" | "lg" | "xl" | "2xl";
  text?: string;
  icon?: JSX.Element;
  iconRight?: JSX.Element;
  withSwappedIcons?: boolean;
  value: string;
  name: string;
  isChecked?: boolean;
  isDisabled?: boolean;
}

const weeklyRadioCards: IRadioCard[] = [
  {
    size: "sm" as const,
    text: "Weekly",
    icon: <RiCalendarView className='size-5' />,
    value: "icon-left-text",
    name: "weekly"
  },
  {
    size: "md" as const,
    text: "Weekly",
    value: "text-only",
    name: "weekly"
  },
  {
    size: "lg" as const,
    text: "Weekly",
    iconRight: <RiCalendarView className='size-5' />,
    value: "text-icon-right",
    name: "weekly"
  },
  {
    size: "xl" as const,
    text: "Weekly",
    icon: <RiCalendarView className='size-5' />,
    iconRight: <RiArrowDownSLine className='size-5' />,
    value: "icon-left-text-icon-right",
    name: "weekly"
  },
  {
    size: "2xl" as const,
    icon: <RiCalendarView className='size-6' />,
    value: "icon-only",
    name: "weekly"
  }
];

const monthlyRadioCards: IRadioCard[] = [
  {
    size: "sm" as const,
    text: "Monthly",
    icon: <RiCalendarTodoLine className='size-5' />,
    value: "icon-left-text",
    name: "monthly",
    isChecked: true
  },
  {
    size: "md" as const,
    text: "Monthly",
    value: "text-only",
    name: "monthly",
    isChecked: true
  },
  {
    size: "lg" as const,
    text: "Monthly",
    iconRight: <RiCalendarTodoLine className='size-5' />,
    value: "text-icon-right",
    name: "monthly",
    isChecked: true
  },
  {
    size: "xl" as const,
    text: "Monthly",
    icon: <RiCalendarTodoLine className='size-5' />,
    iconRight: <RiArrowDownSLine className='size-5' />,
    value: "icon-left-text-icon-right",
    name: "monthly",
    isChecked: true
  },
  {
    size: "2xl" as const,
    icon: <RiCalendarTodoLine className='size-6' />,
    value: "icon-only",
    name: "monthly",
    isChecked: true
  }
];

const annuallyRadioCards: IRadioCard[] = [
  {
    size: "sm" as const,
    text: "Annually",
    icon: <RiCalendarLine className='size-5' />,
    value: "icon-left-text",
    name: "annually",
    isDisabled: true
  },
  {
    size: "md" as const,
    text: "Annually",
    value: "text-only",
    name: "annually",
    isDisabled: true
  },
  {
    size: "lg" as const,
    text: "Annually",
    iconRight: <RiCalendarLine className='size-5' />,
    value: "text-icon-right",
    name: "annually",
    isDisabled: true
  },
  {
    size: "xl" as const,
    text: "Annually",
    icon: <RiCalendarLine className='size-5' />,
    iconRight: <RiArrowDownSLine className='size-5' />,
    value: "icon-left-text-icon-right",
    name: "annually",
    isDisabled: true
  },
  {
    size: "2xl" as const,
    icon: <RiCalendarLine className='size-6' />,
    value: "icon-only",
    name: "annually",
    isDisabled: true
  }
];

const sizeMap = {
  sm: "px-3 py-2 gap-1",
  md: "px-3.5 py-2.5 gap-1",
  lg: "px-4 py-2.5 gap-1.5",
  xl: "px-5 py-3 gap-1.5",
  "2xl": "px-6 py-4 gap-2.5"
};

const RadioCard = ({
  size,
  text,
  icon,
  iconRight,
  withSwappedIcons,
  value,
  name,
  isChecked,
  isDisabled
}: IRadioCard) => {
  return (
    <div
      className={cn(
        "group flex cursor-pointer rounded-sm border border-neutral-200 focus-within:shadow-[0_0px_0px_1px_rgba(68,76,231,0.10),0_0px_0px_4px_rgba(68,76,231,0.12)] focus:bg-neutral-50",
        !isDisabled && "hover:bg-neutral-50",
        isChecked && "border-indigo-600",
        isDisabled && "cursor-not-allowed bg-neutral-100 text-neutral-400"
      )}
    >
      <input
        type='radio'
        value={value}
        name={name}
        disabled={isDisabled}
        checked={isChecked}
        id={`${value}-${name}`}
        className='sr-only appearance-none'
      />
      <label
        htmlFor={`${value}-${name}`}
        className={`flex cursor-pointer items-center justify-center ${sizeMap[size]} ${isDisabled ? "group-hover:cursor-not-allowed" : ""}`}
      >
        {!withSwappedIcons && icon}{" "}
        {text && (
          <span
            className={`px-0.5 text-sm font-medium ${isDisabled ? "text-neutral-400" : "text-neutral-900"}`}
          >
            {text}
          </span>
        )}
        {withSwappedIcons && icon}
        {iconRight}
      </label>
    </div>
  );
};

const RadioCardShowcase = ({ cards }: { cards: IRadioCard[] }) => {
  return (
    <fieldset className='flex max-w-[320px] flex-wrap items-center justify-center gap-x-4 gap-y-3 md:max-w-md md:gap-6 lg:max-w-2xl'>
      <legend className='sr-only'>Select time period</legend>
      {cards.map((card: IRadioCard) => (
        <RadioCard
          key={card.value}
          {...card}
        />
      ))}
    </fieldset>
  );
};

function App() {
  return (
    <main className='mx-auto flex min-h-screen w-full min-w-dvw flex-col items-center gap-8 py-32 md:py-75 lg:py-67'>
      <RadioCardShowcase cards={weeklyRadioCards} />
      <RadioCardShowcase cards={monthlyRadioCards} />
      <RadioCardShowcase cards={annuallyRadioCards} />
    </main>
  );
}

export default App;
