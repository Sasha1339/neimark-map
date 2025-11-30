type BuildingProps = {
  number: number;
  name: string;
  places: Record<string, { id: string, title: string }>
};

export const data: Record<string, BuildingProps> = {
  'Building1': {
    number: 1,
    name: 'Ресепшен',
    places: {
      "Enter1":
        {
          id: '1',
          title:
            'Школа искусств',
        }
      ,
      "Enter0":
        {
          id: '1',
          title:
            'Ресепшен'
        }
    }
  },
  'Building7': {
    number: 7,
    name: 'Брайцев',
    places: {}
  }
}