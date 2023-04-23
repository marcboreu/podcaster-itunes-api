import { checkPodcastExistence, formatHttpsLinks, transformDate, transformMilliseconds } from "../../utils/helpers";


describe("utils", () => {
  describe("transformDate", () => {
    test("transforms a date string into a formatted date string", () => {
      const dateString = "2022-01-01T00:00:00.000Z";
      const expected = "1/1/2022";
      expect(transformDate(dateString)).toEqual(expected);
    });
  });

  describe("transformMilliseconds", () => {
    test("transforms a duration in milliseconds into a formatted duration string", () => {
      expect(transformMilliseconds(60000)).toEqual("01:00");
    });

    test("returns '--:--' for null or undefined values", () => {
      expect(transformMilliseconds(null)).toEqual("--:--");
      expect(transformMilliseconds(undefined)).toEqual("--:--");
    });
  });

  describe("formatHttpsLinks", () => {
    test("replaces all HTTPS links in a text with clickable <a> tags", () => {
      const text =
        "This is a text with an HTTPS link https://example.com and a visit to google.com visit google.com";
      const expected =
        'This is a text with an HTTPS link <a href=\"https://example.com\">https://example.com</a> and a <a href=\"http://to <a href=\"http://google.com\">google.com</a> visit <a href=\"http://google.com\">google.com</a>\">to <a href=\"http://google.com\">google.com</a> visit <a href=\"http://google.com\">google.com</a></a>';
      expect(formatHttpsLinks(text)).toEqual(expected);
    });
  });

  describe("checkPodcastExistence", () => {
    test("checks if a podcast exists in the localStorage", () => {
      localStorage.setItem(
        "podcasts",
        JSON.stringify({
          podcasts: [
            {
              id: {
                attributes: {
                  "im:id": "12345",
                },
              },
            },
          ],
        })
      );
      expect(checkPodcastExistence("12345")).toEqual(true);
      expect(checkPodcastExistence("54321")).toEqual(false);
    });
  });
});
