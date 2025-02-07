describe('PieChart', () => {
  test.todo('Re-enable tests for PieChart');
});
// import React from 'react';
// import { render, screen } from '@testing-library/react-native';
// import { Svg, Circle } from 'react-native-svg';
// import PieChart from '../../../components/ui/PieChart';

// jest.mock('react-native', () => {
//   const RN = jest.requireActual('react-native');
//   return {
//     ...RN,
//     Animated: {
//       ...RN.Animated,
//       timing: jest.fn(() => ({
//         start: jest.fn(),
//       })),
//     },
//   };
// });

// describe('PieChart Component', () => {
//   it('renders correctly with given percentage and color', () => {
//     render(<PieChart percentage={75} color="#1890FF" />);

//     expect(screen.getByText('75%')).toBeTruthy();

//     expect(screen.UNSAFE_getByType(Svg)).toBeTruthy();
//     expect(screen.UNSAFE_getAllByType(Circle).length).toBe(2);
//   });

//   it('matches snapshot', () => {
//     const { toJSON } = render(<PieChart percentage={50} color="#54D62C" />);
//     expect(toJSON()).toMatchSnapshot();
//   });

//   it('renders correct strokeDasharray and strokeDashoffset values', () => {
//     const { getByText } = render(<PieChart percentage={30} color="#FF966B" />);

//     expect(getByText('30%')).toBeTruthy();

//     const circles = screen.UNSAFE_getAllByType(Circle);
//     const progressCircle = circles[1];

//     expect(progressCircle.props.strokeDasharray).toBe(`${2 * Math.PI * 40}`);

//     const expectedDashOffset =
//       2 * Math.PI * 40 - (30 / 100) * (2 * Math.PI * 40);
//     expect(progressCircle.props.strokeDashoffset).toBe(`${expectedDashOffset}`);
//   });
// });
