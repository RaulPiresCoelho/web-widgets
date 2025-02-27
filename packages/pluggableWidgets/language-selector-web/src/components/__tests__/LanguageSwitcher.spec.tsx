<<<<<<< HEAD
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createElement } from "react";
import { PositionEnum, TriggerEnum } from "typings/LanguageSelectorProps";
import { LanguageSwitcher, LanguageSwitcherProps } from "../LanguageSwitcher";
import "@testing-library/jest-dom";

jest.useFakeTimers();

let props: LanguageSwitcherProps = {
=======
import { render } from "@testing-library/react";
import { createElement } from "react";
import { PositionEnum, TriggerEnum } from "typings/LanguageSelectorProps";
import { LanguageSwitcher, LanguageSwitcherProps } from "../LanguageSwitcher";

let props: LanguageSwitcherProps = {
    preview: false,
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
    currentLanguage: undefined,
    languageList: [],
    position: "left" as PositionEnum,
    onSelect: jest.fn(),
    trigger: "click" as TriggerEnum,
<<<<<<< HEAD
    className: "",
    tabIndex: 0
=======
    className: ""
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
};
const language = { _guid: "111", value: "En us" };

describe("Language switcher", () => {
<<<<<<< HEAD
    it("renders the structure with empty language list", async () => {
        const { asFragment } = render(<LanguageSwitcher {...props} />);
        const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });
        const triggerElement = screen.getByRole("combobox");

        await user.click(triggerElement);
        expect(asFragment()).toMatchSnapshot();
    });

    it("renders the structure with language list and selected default language", async () => {
        props = { ...props, languageList: [language], currentLanguage: language };
        const { asFragment } = render(<LanguageSwitcher {...props} />);
        const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });
        const triggerElement = screen.getByRole("combobox");

        await user.click(triggerElement);
=======
    it("renders the structure with empty language list", () => {
        const { asFragment } = render(<LanguageSwitcher {...props} />);
        expect(asFragment()).toMatchSnapshot();
    });

    it("renders the structure with language list and selected default language", () => {
        props = { ...props, languageList: [language], currentLanguage: language };
        const { asFragment } = render(<LanguageSwitcher {...props} />);
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
        expect(asFragment()).toMatchSnapshot();
    });
});
