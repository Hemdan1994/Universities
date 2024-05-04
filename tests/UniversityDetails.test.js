import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route } from "react-router-dom";
import UniversityDetails from "../src/screens/UniversityDetails.jsx";
import { useUniversites } from "../src/hooks/useUniversites";

// Mocking the custom hook
jest.mock("../src/hooks/useUniversites");

describe("UniversityDetails Component", () => {
  test("renders university details correctly", () => {
    const mockData = [
      {
        name: "University of Example",
        country: "Example Country",
        "state-province": "Example State",
        web_pages: ["http://example.com"],
      },
    ];

    useUniversites.mockReturnValue({ data: mockData, dataUpdatedAt: Date.now() });

    const universityId = "University%20of%20Example";

    render(
      <MemoryRouter initialEntries={[`/university/${universityId}`]}>
        <Route path="/university/:id">
          <UniversityDetails />
        </Route>
      </MemoryRouter>
    );

    // Assert
    expect(screen.getByText("University of Example")).toBeInTheDocument();
    expect(screen.getByText("Example Country, Example State")).toBeInTheDocument();
    expect(screen.getByText("Domain: http://example.com")).toBeInTheDocument();
    expect(screen.getByTitle("description")).toBeInTheDocument();
  });
});
