describe('NewestPractices', () => {
  test.todo('Re-enable tests for NewestPractices');
});
// import React from 'react';
// import {
//   render,
//   screen,
//   fireEvent,
//   within,
// } from '@testing-library/react-native';
// import NewestPractices from '../../../components/features/dashboard/NewestPractices';
// import { newestPracticesData } from '../../../components/features/dashboard/newestPractices.data';

// const mockToggleStatus = jest.fn();
// const mockEdit = jest.fn();
// const mockDelete = jest.fn();

// describe('NewestPractices Component', () => {
//   beforeEach(() => {
//     jest.clearAllMocks();
//   });

//   it('renders correctly with data', () => {
//     render(
//       <NewestPractices
//         data={newestPracticesData}
//         onToggleStatus={mockToggleStatus}
//         onEdit={mockEdit}
//         onDelete={mockDelete}
//       />
//     );

//     expect(screen.getByText('Newest Practices')).toBeTruthy();

//     newestPracticesData.forEach((practice) => {
//       const practiceElements = screen.getAllByText(practice.name);
//       expect(practiceElements.length).toBeGreaterThan(0);

//       practiceElements.forEach((practiceElement) => {
//         const practiceContainer = practiceElement.parent;
//         expect(practiceContainer).not.toBeNull();

//         expect(
//           within(practiceContainer!).getByText(practice.phone)
//         ).toBeTruthy();
//         expect(
//           within(practiceContainer!).getByText(practice.email)
//         ).toBeTruthy();
//       });
//     });
//   });

//   it('calls toggle status callback', () => {
//     render(
//       <NewestPractices
//         data={newestPracticesData}
//         onToggleStatus={mockToggleStatus}
//         onEdit={mockEdit}
//         onDelete={mockDelete}
//       />
//     );

//     const switches = screen.getAllByRole('switch');
//     expect(switches.length).toBeGreaterThan(0);

//     fireEvent.press(switches[0]);
//     expect(mockToggleStatus).toHaveBeenCalledTimes(1);
//   });

//   it('calls edit callback', () => {
//     render(
//       <NewestPractices
//         data={newestPracticesData}
//         onToggleStatus={mockToggleStatus}
//         onEdit={mockEdit}
//         onDelete={mockDelete}
//       />
//     );

//     const editButtons = screen.getAllByTestId(/^edit-button-/);
//     expect(editButtons.length).toBeGreaterThan(0);

//     fireEvent.press(editButtons[0]);
//     expect(mockEdit).toHaveBeenCalledTimes(1);
//   });

//   it('calls delete callback', () => {
//     render(
//       <NewestPractices
//         data={newestPracticesData}
//         onToggleStatus={mockToggleStatus}
//         onEdit={mockEdit}
//         onDelete={mockDelete}
//       />
//     );

//     const deleteButtons = screen.getAllByTestId(/^delete-button-/);
//     expect(deleteButtons.length).toBeGreaterThan(0);

//     fireEvent.press(deleteButtons[0]);
//     expect(mockDelete).toHaveBeenCalledTimes(1);
//   });

//   it('matches snapshot', () => {
//     const { toJSON } = render(
//       <NewestPractices
//         data={newestPracticesData}
//         onToggleStatus={mockToggleStatus}
//         onEdit={mockEdit}
//         onDelete={mockDelete}
//       />
//     );
//     expect(toJSON()).toMatchSnapshot();
//   });
// });
