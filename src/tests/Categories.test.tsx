
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import { Categories } from "../Question/Categories";
import { MemoryRouter } from "react-router-dom";

test("Render the main page without any data saved", async () => {
  //Arrange
  render(
    // These are needed since the Categories component uses the useNavigate hook from react-router-dom
    <MemoryRouter>
      <Categories />
    </MemoryRouter>
  );
  
  //Act
  
  //Assert
  expect(screen.getByRole('heading', { name: 'Categories - Categorias' }));
  expect(screen.getByRole('button'));
});


const mockedCategories = [
  //random will be added by the useEffect hook
  {key: 0, name: "Cat1", category: "cat1"},
  {key: 1, name: "Cat2", category: "cat2"},
];

const mockedQuestionData = [
  {sheetName: "Categories", questions: [
    {Name: "Cat1", category: "cat1"},
    {Name: "Cat2", category: "cat2"},
  ]},
  {sheetName: "Cat1", questions: [
    {Key: 0,
    enQuestion: "Question 1",
    esQuestion: "Pregunta 1",
    answer: "Answer 1",
    choices: "Choice 1, Choice 2, Choice 3, Choice 4",}
  ]},
  {sheetName: "Cat2", questions: [
    {Key: 1,
    enQuestion: "Question 2",
    esQuestion: "Pregunta 2",
    answer: "Answer 2",
    choices: "Choice 1, Choice 2, Choice 3, Choice 4",}
  ]}
]

test("Add data to local storage via a mocked file input", async () => {
  
  // Mocking local storage data
  const localStorageData: Record<string, string> = {
    'projects/mindQuest/categories': JSON.stringify(mockedCategories),
    'projects/mindQuest/questionData': JSON.stringify(mockedQuestionData),
  };

  Storage.prototype.getItem = jest.fn((key) => localStorageData[key] || '[]');
  Storage.prototype.setItem = jest.fn((key, value) => {
    localStorageData[key] = value;
  });
  
  //mock file object
  const file = new File([''], 'filename', { type: 'xlsx' });
  
  //Arrange
  render(
    <MemoryRouter>
      <Categories />
    </MemoryRouter>
  );
  
  //Act
  const fileInput = screen.getByRole('button').querySelector('input[type="file"]');
  if (!fileInput) throw new Error('File input not found'); //the querySelector can return null if no matches found
  //fire the change event on the file input element
  fireEvent.change(fileInput, { target: { files: [file] } });
  
  //Assert
  
  // Check if data was added to localStorage
  const addedData = JSON.parse(localStorageData['projects/mindQuest/categories']);
  expect(addedData).toEqual(mockedCategories);
  
  //Expect to have three categories
  // await waitFor(() => expect(screen.getAllByRole('gridcell')).toHaveLength(3));
  
});
