describe('DashboardWidgets', () => {
  test.todo('Re-enable tests for DashboardWidgets');
});

// import React from 'react';
// import { render, screen, within } from '@testing-library/react-native';
// import DashboardWidgets from '../../../components/features/dashboard/DashboardWidgets';
// import { dashboardWidgetsData } from '../../../components/features/dashboard/dashboardWidgets.data';

// describe('DashboardWidgets', () => {
//   it('renders all widgets correctly', () => {
//     render(<DashboardWidgets data={dashboardWidgetsData} />);

//     dashboardWidgetsData.forEach((widget) => {
//       expect(screen.getByText(widget.name)).toBeTruthy();
//     });

//     // ✅ Ensure numbers are inside their respective widgets
//     dashboardWidgetsData.forEach((widget) => {
//       const widgetElement = screen.getByText(widget.name);
//       if (!widgetElement.parent) {
//         throw new Error(
//           `Parent container not found for widget: ${widget.name}`
//         );
//       }
//       expect(
//         within(widgetElement.parent).getByText(String(widget.count))
//       ).toBeTruthy();
//     });
//   });

//   it('renders icons for each widget', () => {
//     render(<DashboardWidgets data={dashboardWidgetsData} />);
//     const images = screen.getAllByRole('image');
//     expect(images.length).toBe(dashboardWidgetsData.length);
//   });

//   it('matches snapshot', () => {
//     const { toJSON } = render(<DashboardWidgets data={dashboardWidgetsData} />);
//     expect(toJSON()).toMatchSnapshot();
//   });
// });
