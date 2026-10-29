// Завдання 1
let age: number = 50;
let name: string = 'Max';
let toggle: boolean = true;
let empty: null = null;
let notInitialize: undefined;
let callback = (a: number): number => { return 100 + a };

// Завдання 2
let anything: any = -20;
anything = 'Text';
anything = {};

// Завдання 3
let some: unknown;
some = 'Text';
let str: string;

if (typeof some === 'string') {
  str = some;
}

// Завдання 4
let person: [string, number] = ['Max', 21];

// Завдання 5
let union: string | number;
let literal: 'enable' | 'disable';

// Завдання 6
function showMessage(message: string): void {
  console.log(message);
}

function calc(num1: number, num2: number): number {
  return num1 + num2;
}

function customError(): never {
  throw new Error('Error');
}

// Завдання 7
enum DayOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function isWeekend(day: DayOfWeek): boolean {
  return day === DayOfWeek.Saturday || day === DayOfWeek.Sunday;
}

// Завдання 8
type Gender = 'male' | 'female';
let myGender: Gender = 'male';

// Завдання 9
type Page = {
  title: string;
  likes: number;
  accounts: string[];
  status: 'open' | 'close';
  details?: {
    createAt: Date;
    updateAt: Date;
  };
};

const page1: Page = {
  title: 'The awesome page',
  likes: 100,
  accounts: ['Max', 'Anton', 'Nikita'],
  status: 'open',
  details: {
    createAt: new Date('2021-01-01'),
    updateAt: new Date('2021-05-01'),
  },
};

const page2: Page = {
  title: 'Python or Js',
  likes: 5,
  accounts: ['Alex'],
  status: 'close',
};