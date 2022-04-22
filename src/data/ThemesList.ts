import Blackboard from './../themes/Blackboard.json';
import Cobalt from './../themes/Cobalt.json';
import Dracula from './../themes/Dracula.json';
import GitHub from './../themes/GitHub.json';
import IDLE from './../themes/IDLE.json';
import Monokai from './../themes/Monokai.json';

type ThemesListType = {
  [themeName: string]: {
    path: string;
    theme: any;
  };
};

const ThemesList: ThemesListType = {
  Blackboard: {
    path: './themes/Blackboard.json',
    theme: Blackboard,
  },
  Cobalt: {
    path: './themes/Cobalt.json',
    theme: Cobalt,
  },
  Dracula: {
    path: './themes/Dracula.json',
    theme: Dracula,
  },
  GitHub: {
    path: './themes/GitHub.json',
    theme: GitHub,
  },
  IDLE: {
    path: './themes/IDLE.json',
    theme: IDLE,
  },
  Monokai: {
    path: './themes/Monokai.json',
    theme: Monokai,
  },
};

export default ThemesList;
