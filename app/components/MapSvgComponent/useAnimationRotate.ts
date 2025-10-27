import {Hotel} from "../../shared/types";
import {useEffect} from "react";
import {useAnimatedProps, useSharedValue, withTiming} from "react-native-reanimated";
import {pathsCenter, pathsRotate} from "./data";

export const useAnimationRotate = (type?: Hotel) => {

  const rotationOne = useSharedValue(0);
  const rotationTwo = useSharedValue(0);
  const rotationThree = useSharedValue(0);
  const rotationFour = useSharedValue(0);
  const rotationFive = useSharedValue(0);
  const rotationSix = useSharedValue(0);
  const rotationSeven = useSharedValue(0);
  const rotationEight = useSharedValue(0);
  const rotationNine = useSharedValue(0);
  const rotationTen = useSharedValue(0);
  const rotationEleven = useSharedValue(0);
  const rotationTwelve = useSharedValue(0);
  const rotationThirteen = useSharedValue(0);
  const rotationFourteen = useSharedValue(0);
  const rotationFifteen = useSharedValue(0);
  const rotationSixteen = useSharedValue(0);
  const rotationSeventeen = useSharedValue(0);
  const rotationEighteen = useSharedValue(0);

  useEffect(() => {

    rotationOne.value = withTiming(type === Hotel.ONE ? pathsRotate[type] : 0, { duration: 300 });
    rotationTwo.value = withTiming(type === Hotel.TWO ? pathsRotate[type] : 0, { duration: 300 });
    rotationThree.value = withTiming(type === Hotel.THREE ? pathsRotate[type] : 0, { duration: 300 });
    rotationFour.value = withTiming(type === Hotel.FOUR ? pathsRotate[type] : 0, { duration: 300 });
    rotationFive.value = withTiming(type === Hotel.FIVE ? pathsRotate[type] : 0, { duration: 300 });
    rotationSix.value = withTiming(type === Hotel.SIX ? pathsRotate[type] : 0, { duration: 300 });
    rotationSeven.value = withTiming(type === Hotel.SEVEN ? pathsRotate[type] : 0, { duration: 300 });
    rotationEight.value = withTiming(type === Hotel.EIGHT ? pathsRotate[type] : 0, { duration: 300 });
    rotationNine.value = withTiming(type === Hotel.NINE ? pathsRotate[type] : 0, { duration: 300 });
    rotationTen.value = withTiming(type === Hotel.TEN ? pathsRotate[type] : 0, { duration: 300 });
    rotationEleven.value = withTiming(type === Hotel.ELEVEN ? pathsRotate[type] : 0, { duration: 300 });
    rotationTwelve.value = withTiming(type === Hotel.TWELVE ? pathsRotate[type] : 0, { duration: 300 });
    rotationThirteen.value = withTiming(type === Hotel.THIRTEEN ? pathsRotate[type] : 0, { duration: 300 });
    rotationFourteen.value = withTiming(type === Hotel.FOURTEEN ? pathsRotate[type] : 0, { duration: 300 });
    rotationFifteen.value = withTiming(type === Hotel.FIFTEEN ? pathsRotate[type] : 0, { duration: 300 });
    rotationSixteen.value = withTiming(type === Hotel.SIXTEEN ? pathsRotate[type] : 0, { duration: 300 });
    rotationSeventeen.value = withTiming(type === Hotel.SEVENTEEN ? pathsRotate[type] : 0, { duration: 300 });
    rotationEighteen.value = withTiming(type === Hotel.EIGHTEEN ? pathsRotate[type] : 0, { duration: 300 });

  }, [type]);

  const animatedPropsOne = useAnimatedProps(() => {
    return {
      transform: `rotate(${rotationOne.value}, ${pathsCenter[Hotel.ONE].x}, ${pathsCenter[Hotel.ONE].y})`, // ← здесь можно!
    };
  });

  const animatedPropsTwo = useAnimatedProps(() => {
    return {
      transform: `rotate(${rotationTwo.value}, ${pathsCenter[Hotel.TWO].x}, ${pathsCenter[Hotel.TWO].y})`, // ← здесь можно!
    };
  });
  const animatedPropsThree = useAnimatedProps(() => {
    return {
      transform: `rotate(${rotationThree.value}, ${pathsCenter[Hotel.THREE].x}, ${pathsCenter[Hotel.THREE].y})`, // ← здесь можно!
    };
  });

  const animatedPropsFour = useAnimatedProps(() => {
    return {
      transform: `rotate(${rotationFour.value}, ${pathsCenter[Hotel.FOUR].x}, ${pathsCenter[Hotel.FOUR].y})`, // ← здесь можно!
    };
  });

  const animatedPropsFive = useAnimatedProps(() => {
    return {
      transform: `rotate(${rotationFive.value}, ${pathsCenter[Hotel.FIVE].x}, ${pathsCenter[Hotel.FIVE].y})`, // ← здесь можно!
    };
  });

  const animatedPropsSix = useAnimatedProps(() => {
    return {
      transform: `rotate(${rotationSix.value}, ${pathsCenter[Hotel.SIX].x}, ${pathsCenter[Hotel.SIX].y})`, // ← здесь можно!
    };
  });

  const animatedPropsSeven = useAnimatedProps(() => {
    return {
      transform: `rotate(${rotationSeven.value}, ${pathsCenter[Hotel.SEVEN].x}, ${pathsCenter[Hotel.SEVEN].y})`, // ← здесь можно!
    };
  });

  const animatedPropsEight = useAnimatedProps(() => {
    return {
      transform: `rotate(${rotationEight.value}, ${pathsCenter[Hotel.EIGHT].x}, ${pathsCenter[Hotel.EIGHT].y})`, // ← здесь можно!
    };
  });

  const animatedPropsNine = useAnimatedProps(() => {
    return {
      transform: `rotate(${rotationNine.value}, ${pathsCenter[Hotel.NINE].x}, ${pathsCenter[Hotel.NINE].y})`, // ← здесь можно!
    };
  });

  const animatedPropsTen = useAnimatedProps(() => {
    return {
      transform: `rotate(${rotationTen.value}, ${pathsCenter[Hotel.TEN].x}, ${pathsCenter[Hotel.TEN].y})`, // ← здесь можно!
    };
  });

  const animatedPropsEleven = useAnimatedProps(() => {
    return {
      transform: `rotate(${rotationEleven.value}, ${pathsCenter[Hotel.ELEVEN].x}, ${pathsCenter[Hotel.ELEVEN].y})`, // ← здесь можно!
    };
  });

  const animatedPropsTwelve = useAnimatedProps(() => {
    return {
      transform: `rotate(${rotationTwelve.value}, ${pathsCenter[Hotel.TWELVE].x}, ${pathsCenter[Hotel.TWELVE].y})`, // ← здесь можно!
    };
  });

  const animatedPropsThirteen = useAnimatedProps(() => {
    return {
      transform: `rotate(${rotationThirteen.value}, ${pathsCenter[Hotel.THIRTEEN].x}, ${pathsCenter[Hotel.THIRTEEN].y})`, // ← здесь можно!
    };
  });

  const animatedPropsFourteen = useAnimatedProps(() => {
    return {
      transform: `rotate(${rotationFourteen.value}, ${pathsCenter[Hotel.FOURTEEN].x}, ${pathsCenter[Hotel.FOURTEEN].y})`, // ← здесь можно!
    };
  });

  const animatedPropsFifteen = useAnimatedProps(() => {
    return {
      transform: `rotate(${rotationFifteen.value}, ${pathsCenter[Hotel.FIFTEEN].x}, ${pathsCenter[Hotel.FIFTEEN].y})`, // ← здесь можно!
    };
  });

  const animatedPropsSixteen = useAnimatedProps(() => {
    return {
      transform: `rotate(${rotationSixteen.value}, ${pathsCenter[Hotel.SIXTEEN].x}, ${pathsCenter[Hotel.SIXTEEN].y})`, // ← здесь можно!
    };
  });

  const animatedPropsSeventeen = useAnimatedProps(() => {
    return {
      transform: `rotate(${rotationSeventeen.value}, ${pathsCenter[Hotel.SEVENTEEN].x}, ${pathsCenter[Hotel.SEVENTEEN].y})`, // ← здесь можно!
    };
  });

  const animatedPropsEighteen = useAnimatedProps(() => {
    return {
      transform: `rotate(${rotationEighteen.value}, ${pathsCenter[Hotel.EIGHTEEN].x}, ${pathsCenter[Hotel.EIGHTEEN].y})`, // ← здесь можно!
    };
  });

  return [animatedPropsOne,
          animatedPropsTwo,
          animatedPropsThree,
          animatedPropsFour,
          animatedPropsFive,
          animatedPropsSix,
          animatedPropsSeven,
          animatedPropsEight,
          animatedPropsNine,
          animatedPropsTen,
          animatedPropsEleven,
          animatedPropsTwelve,
          animatedPropsThirteen,
          animatedPropsFourteen,
          animatedPropsFifteen,
          animatedPropsSixteen,
          animatedPropsSeventeen,
          animatedPropsEighteen]
}