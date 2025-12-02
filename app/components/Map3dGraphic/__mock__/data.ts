type BuildingProps = {
  number: number;
  name: string;
  places: Record<string, { id: string, title: string, sideText: 'right' | 'left', color?: string }>
};

export const data: Record<string, BuildingProps> = {
  'Building1': {
    number: 1,
    name: 'Ресепшен',
    places: {
      "Enter1":
        {
          id: '1',
          sideText: 'left',
          color: '#0058ff',
          title:
            'Школа искусств',
        }
      ,
      "Enter0":
        {
          id: '1',
          sideText: 'right',
          color: '#ff00f5',
          title:
            'Ресепшен'
        }
    }
  },
  'Building2': {
    number: 2,
    name: 'Бетанкур',
    places: {
      "Enter0":
        {
          id: '1',
          sideText: 'left',
          color: '#66D300',
          title:
            'Цветы'
        },
      "Enter1":
        {
          id: '1',
          sideText: 'right',
          color: '#ff8600',
          title:
            'Mola Mola'
        }
    }
  },
  'Building3': {
    number: 3,
    name: 'Лобачевский',
    places: {
      "Enter0":
        {
          id: '1',
          sideText: 'left',
          color: '#83ff00',
          title:
            'Starbucks'
        }
    }
  },
  'Building4': {
    number: 4,
    name: 'Калашников',
    places: {
      "Enter0":
        {
          id: '1',
          sideText: 'left',
          color: '#489400',
          title:
            'Овощи и фрукты',
        }
      ,
      "Enter1":
        {
          id: '1',
          sideText: 'right',
          color: '#006FFF',
          title:
            'Групповые тренировки'
        },
      "Enter2":
        {
          id: '1',
          sideText: 'left',
          color: '#FF2596',
          title:
            'Массаж'
        }
    }
  },
  'Building5': {
    number: 5,
    name: 'Ляпунов',
    places: {
      "Enter0":
        {
          id: '1',

          sideText: 'left',
          color: '#05fff0',
          title:
            'Прачка',
        }
      ,
      "Enter1":
        {
          id: '1',
          sideText: 'left',
          color: '#34ff00',
          title:
            'Библиотека'
        },
      "Enter2":
        {
          id: '1',
          sideText: 'left',
          color: '#00ffcc',
          title:
            'Фотостудия'
        }
    }
  },
  'Building6': {
    number: 6,
    name: 'Стеклов',
    places: {
      "Enter0":
        {
          id: '1',
          sideText: 'left',
          color: '#faff00',
          title:
            'Коворкинг',
        }
      ,
      "Enter1":
        {
          id: '1',
          sideText: 'right',
          color: '#5100FF',
          title:
            'Неймарк'
        },
      "Enter2":
        {
          id: '1',
          sideText: 'left',
          color: '#ff0000',
          title:
            'Яндекс'
        }
    }
  },
  'Building7': {
    number: 7,
    name: 'Брайцев',
    places: {
      "Enter1":
        {
          id: '1',
          sideText: 'left',
          color: '#5100FF',
          title:
            'Wildberries',
        }
      ,
      "Enter2":
        {
          id: '1',
          sideText: 'left',
          color: '#ff0000',
          title:
            'Школа ин. языков'
        }
    }
  },
  'Building8': {
    number: 8,
    name: 'Галонов-Грехов',
    places: {
      "Enter0":
        {
          id: '1',
          sideText: 'right',
          color: '#00cdff',
          title:
            'Оптика'
        },
      "Enter1":
        {
          id: '1',
          sideText: 'right',
          color: '#7D0002',
          title:
            'Компьютерный клуб'
        }
    }
  },
  'Building9': {
    number: 9,
    name: 'Андронов',
    places: {
      "Enter0":
        {
          id: '1',
          sideText: 'left',
          color: '#00ccff',
          title:
            'Мини кино',
        }
      ,
      "Enter1":
        {
          id: '1',
          sideText: 'right',
          color: '#CCECAA',
          title:
            'Столовая'
        },
      "Enter2":
        {
          id: '1',
          sideText: 'left',
          color: '#00ffef',
          title:
            'Ремонт гаджетов'
        }
    }
  },
  'Building10': {
    number: 10,
    name: 'Харитон',
    places: {
      "Enter0":
        {
          id: '1',
          sideText: 'left',
          color: '#ff8100',
          title:
            'Кондитерская',
        }
      ,
      "Enter1":
        {
          id: '1',
          sideText: 'left',
          color: '#7400ff',
          title:
            'Место встречи'
        }
    }
  },
  'Building11': {
    number: 11,
    name: 'Боголюбов',
    places: {
      "Enter0":
        {
          id: '1',
          sideText: 'left',
          color: '#00c9ff',
          title:
            'Мед. помощь',
        }
      ,
      "Enter1":
        {
          id: '1',
          sideText: 'right',
          color: '#00ff42',
          title:
            'Центр здоровья'
        },
      "Enter2":
        {
          id: '1',
          sideText: 'left',
          color: '#ff00f3',
          title:
            'Место встречи'
        }
    }
  },
  'Building12': {
    number: 12,
    name: 'Африканов',
    places: {
      "Enter0":
        {
          id: '1',
          sideText: 'left',
          color: '#ff4a00',
          title:
            'Коворкинг',
        }
    }
  },
  'Building13': {
    number: 13,
    name: 'Алексеев',
    places: {
      "Enter0":
        {
          id: '1',
          sideText: 'left',
          color: '#00ff45',
          title:
            'Салон красоты',
        }
      ,
      "Enter1":
        {
          id: '1',
          sideText: 'left',
          color: '#00ffce',
          title:
            'Стоматология'
        }
    }
  },
  'Building14': {
    number: 14,
    name: 'Гинзбург',
    places: {
      "Enter0":
        {
          id: '1',
          sideText: 'left',
          color: '#7aff00',
          title:
            'Кабинет матери',
        }
      ,
      "Enter1":
        {
          id: '1',
          sideText: 'right',
          color: '#ff8500',
          title:
            'Кафе'
        }
    }
  },
  'Building15': {
    number: 15,
    name: 'Неймарк',
    places: {
      "Enter0":
        {
          id: '1',
          sideText: 'right',
          color: '#ff3800',
          title:
            'Coffee Like',
        }
      ,
      "Enter1":
        {
          id: '1',
          sideText: 'right',
          color: '#ff0000',
          title:
            'Барбершоп'
        }
    }
  },
  'Building16': {
    number: 16,
    name: 'Баталова',
    places: {
      "Enter0":
        {
          id: '1',
          sideText: 'left',
          color: '#7bff00',
          title:
            'Витрина инноваций',
        }
    }
  },
  'Building17': {
    number: 17,
    name: 'Сахаров',
    places: {
      "Enter0":
        {
          id: '1',
          sideText: 'left',
          color: '#5500ff',
          title:
            'Карьерный центр',
        }
    }
  },
  'Building18': {
    number: 18,
    name: 'Афраймович',
    places: {}
  },
}