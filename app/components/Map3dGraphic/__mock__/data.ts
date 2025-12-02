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
          color: '#ff0000',
          title:
            'Школа искусств',
        }
      ,
      "Enter0":
        {
          id: '1',
          sideText: 'right',
          color: '#ff0000',
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
          color: '#ff0000',
          title:
            'Цветы'
        },
      "Enter1":
        {
          id: '1',
          sideText: 'right',
          color: '#ff0000',
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
          color: '#ff0000',
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
          color: '#ff0000',
          title:
            'Овощи и фрукты',
        }
      ,
      "Enter1":
        {
          id: '1',
          sideText: 'right',
          color: '#ff0000',
          title:
            'Групповые тренировки'
        },
      "Enter2":
        {
          id: '1',
          sideText: 'left',
          color: '#ff0000',
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
          color: '#ff0000',
          title:
            'Прачка',
        }
      ,
      "Enter1":
        {
          id: '1',
          sideText: 'left',
          color: '#ff0000',
          title:
            'Библиотека'
        },
      "Enter2":
        {
          id: '1',
          sideText: 'left',
          color: '#ff0000',
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
          color: '#ff0000',
          title:
            'Коворкинг',
        }
      ,
      "Enter1":
        {
          id: '1',
          sideText: 'right',
          color: '#ff0000',
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
          color: '#ff0000',
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
          color: '#ff0000',
          title:
            'Оптика'
        },
      "Enter1":
        {
          id: '1',
          sideText: 'left',
          color: '#ff0000',
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
          color: '#ff0000',
          title:
            'Мини кино',
        }
      ,
      "Enter1":
        {
          id: '1',
          sideText: 'right',
          color: '#ff0000',
          title:
            'Столовая'
        },
      "Enter2":
        {
          id: '1',
          sideText: 'left',
          color: '#ff0000',
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
          color: '#ff0000',
          title:
            'Кондитерская',
        }
      ,
      "Enter1":
        {
          id: '1',
          sideText: 'left',
          color: '#ff0000',
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
          color: '#ff0000',
          title:
            'Мед. помощь',
        }
      ,
      "Enter1":
        {
          id: '1',
          sideText: 'right',
          color: '#ff0000',
          title:
            'Центр здоровья'
        },
      "Enter2":
        {
          id: '1',
          sideText: 'left',
          color: '#ff0000',
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
          color: '#ff0000',
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
          color: '#ff0000',
          title:
            'Салон красоты',
        }
      ,
      "Enter1":
        {
          id: '1',
          sideText: 'left',
          color: '#ff0000',
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
          color: '#ff0000',
          title:
            'Кабинет матери',
        }
      ,
      "Enter1":
        {
          id: '1',
          sideText: 'right',
          color: '#ff0000',
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
          color: '#ff0000',
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
          color: '#ff0000',
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
          color: '#ff0000',
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