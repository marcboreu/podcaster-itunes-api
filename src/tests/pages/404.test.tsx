import { render } from "@testing-library/react";
import NotFound from "../../pages/404";
import { ERROR_MESSAGE_PAGE_NOTFOUND, ERROR_MESSAGE_PAGE_NOTFOUND_SUBTITLE } from "../../utils/globals";
import { MemoryRouter } from "react-router-dom";

describe("404 page", () => {
  it("should render not found message", () => {
    const { getByText } = render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    );
    expect(getByText(ERROR_MESSAGE_PAGE_NOTFOUND)).toBeInTheDocument();
    expect(getByText(ERROR_MESSAGE_PAGE_NOTFOUND_SUBTITLE)).toBeInTheDocument();
  });
});