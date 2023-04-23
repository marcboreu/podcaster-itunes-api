import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { APP_NAME } from "../../utils/globals";
import Header from "../../components/Header";

describe("Header component", () => {
    it("renders Header component", () => {
        render(
            <MemoryRouter>
                <Header />
            </MemoryRouter>
        );
        expect(screen.getByText(APP_NAME)).toBeInTheDocument();
    });
    it("show loading whe page is rendering and route change", async () => {
        render(
            <MemoryRouter>
                <Header />
            </MemoryRouter>
        );
        fireEvent.click(screen.getByText(APP_NAME));
        await waitFor(() => {
            expect(screen.queryByRole("status")).not.toBeInTheDocument();
        });
    });
});

