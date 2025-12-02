type BuildingProps = {
  number: number;
  name: string;
  places: Record<string, { id: string, title: string, sideText: 'right' | 'left' }>
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
          title:
            'Школа искусств',
        }
      ,
      "Enter0":
        {
          id: '1',
          sideText: 'right',
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
          title:
            'Цветы'
        },
      "Enter1":
        {
          id: '1',
          sideText: 'right',
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
          title:
            'Овощи и фрукты',
        }
      ,
      "Enter1":
        {
          id: '1',
          sideText: 'right',
          title:
            'Групповые тренировки'
        },
      "Enter2":
        {
          id: '1',
          sideText: 'left',
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
          title:
            'Прачка',
        }
      ,
      "Enter1":
        {
          id: '1',
          sideText: 'left',
          title:
            'Библиотека'
        },
      "Enter2":
        {
          id: '1',
          sideText: 'left',
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
          title:
            'Коворкинг',
        }
      ,
      "Enter1":
        {
          id: '1',
          sideText: 'right',
          title:
            'Неймарк'
        },
      "Enter2":
        {
          id: '1',
          sideText: 'left',
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
          title:
            'Wildberries',
        }
      ,
      "Enter2":
        {
          id: '1',
          sideText: 'left',
          title:
            'Школа ин. языков'
        }
    }
  },
  'Building8': {
    number: 8,
    name: 'Галонов-Грехов',
    places: {
      "Enter1":
        {
          id: '1',
          sideText: 'right',
          title:
            'Оптика'
        },
      "Enter2":
        {
          id: '1',
          sideText: 'left',
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
          title:
            'Мини кино',
        }
      ,
      "Enter1":
        {
          id: '1',
          sideText: 'right',
          title:
            'Столовая'
        },
      "Enter2":
        {
          id: '1',
          sideText: 'left',
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
          title:
            'Кондитерская',
        }
      ,
      "Enter1":
        {
          id: '1',
          sideText: 'left',
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
          title:
            'Мед. помощь',
        }
      ,
      "Enter1":
        {
          id: '1',
          sideText: 'right',
          title:
            'Центр здоровья'
        },
      "Enter2":
        {
          id: '1',
          sideText: 'left',
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
          title:
            'Салон красоты',
        }
      ,
      "Enter1":
        {
          id: '1',
          sideText: 'left',
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
          title:
            'Кабинет матери',
        }
      ,
      "Enter1":
        {
          id: '1',
          sideText: 'right',
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
          title:
            'Coffee Like',
        }
      ,
      "Enter1":
        {
          id: '1',
          sideText: 'right',
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