describe('StatusOverview', () => {
  test.todo('Re-enable tests for StatusOverview');
});

// import React from 'react';
// import { render, screen } from '@testing-library/react-native';
// import StatusOverview from '../../../components/features/dashboard/StatusOverview';

// describe('StatusOverview Component', () => {
//   it('renders correctly and shows all statuses', () => {
//     render(<StatusOverview />);

//     expect(screen.getByText('Pending')).toBeTruthy();
//     expect(screen.getByText('24%')).toBeTruthy();

//     expect(screen.getByText('Registered')).toBeTruthy();
//     expect(screen.getByText('56%')).toBeTruthy();

//     expect(screen.getByText('Post Treatment')).toBeTruthy();
//     expect(screen.getByText('20%')).toBeTruthy();
//   });

//   it('renders PieChart components for each status', () => {
//     render(<StatusOverview />);

//     const pieCharts = screen.getAllByTestId('pie-chart');
//     expect(pieCharts.length).toBe(3);
//   });

//   it('matches snapshot', () => {
//     const { toJSON } = render(<StatusOverview />);
//     expect(toJSON()).toMatchSnapshot();
//   });
// });
