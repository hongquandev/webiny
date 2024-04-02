// Elements
import accordion from "@webiny/app-page-builder/render/plugins/elements/accordion";
import accordionItem from "@webiny/app-page-builder/render/plugins/elements/accordionItem";
import block from "@webiny/app-page-builder/render/plugins/elements/block";
import button from "@webiny/app-page-builder/render/plugins/elements/button";
import carousel from "@webiny/app-page-builder/render/plugins/elements/carousel";
import carouselElement from "@webiny/app-page-builder/render/plugins/elements/carouselElement";
import cell from "@webiny/app-page-builder/render/plugins/elements/cell";
import document from "@webiny/app-page-builder/render/plugins/elements/document";
import codesandbox from "@webiny/app-page-builder/render/plugins/elements/embeds/codesandbox";
import pinterest from "@webiny/app-page-builder/render/plugins/elements/embeds/pinterest";
import soundcloud from "@webiny/app-page-builder/render/plugins/elements/embeds/soundcloud";
import twitter from "@webiny/app-page-builder/render/plugins/elements/embeds/twitter";
import vimeo from "@webiny/app-page-builder/render/plugins/elements/embeds/vimeo";
import youtube from "@webiny/app-page-builder/render/plugins/elements/embeds/youtube";
import grid from "@webiny/app-page-builder/render/plugins/elements/grid";
import heading from "@webiny/app-page-builder/render/plugins/elements/heading";
import icon from "@webiny/app-page-builder/render/plugins/elements/icon";
import iframe from "@webiny/app-page-builder/render/plugins/elements/iframe";
import image from "@webiny/app-page-builder/render/plugins/elements/image";
import imagesList from "@webiny/app-page-builder/render/plugins/elements/imagesList";
import list from "@webiny/app-page-builder/render/plugins/elements/list";
import pagesList from "@webiny/app-page-builder/render/plugins/elements/pagesList";
import paragraph from "@webiny/app-page-builder/render/plugins/elements/paragraph";
import quote from "@webiny/app-page-builder/render/plugins/elements/quote";
import tab from "@webiny/app-page-builder/render/plugins/elements/tab";
import tabs from "@webiny/app-page-builder/render/plugins/elements/tabs";
// Page settings
import pageSettings from "@webiny/app-page-builder/render/plugins/pageSettings";
// Element settings
import align from "@webiny/app-page-builder/render/plugins/elementSettings/align";
import animation from "@webiny/app-page-builder/render/plugins/elementSettings/animation";
import background from "@webiny/app-page-builder/render/plugins/elementSettings/background";
import border from "@webiny/app-page-builder/render/plugins/elementSettings/border";
import gridSettings from "@webiny/app-page-builder/render/plugins/elementSettings/grid";
import height from "@webiny/app-page-builder/render/plugins/elementSettings/height";
import margin from "@webiny/app-page-builder/render/plugins/elementSettings/margin";
import padding from "@webiny/app-page-builder/render/plugins/elementSettings/padding";
import property from "@webiny/app-page-builder/render/plugins/elementSettings/property";
import shadow from "@webiny/app-page-builder/render/plugins/elementSettings/shadow";
import textSetting from "@webiny/app-page-builder/render/plugins/elementSettings/text";
import width from "@webiny/app-page-builder/render/plugins/elementSettings/width";
// Responsive mode
import responsiveMode from "@webiny/app-page-builder/render/plugins/responsiveMode";
import spaceX from "./spaceX/website";
import { buttonClickHandlers } from "../../../../extensions/pb-button-click-handlers/render";

export default [
    // Elements
    document(),
    grid(),
    block(),
    cell(),
    image(),
    icon(),
    paragraph(),
    heading(),
    list(),
    quote(),
    button(),
    codesandbox(),
    soundcloud(),
    youtube(),
    iframe(),
    vimeo(),
    twitter(),
    pinterest(),
    pagesList(),
    imagesList(),
    accordion(),
    accordionItem(),
    tabs(),
    tab(),
    carousel(),
    carouselElement(),
    // Page settings
    pageSettings(),
    // Element settings
    align,
    animation,
    background,
    border,
    gridSettings,
    height,
    width,
    shadow,
    padding,
    margin,
    textSetting,
    property,
    responsiveMode(),
    spaceX,
    // Custom button callback handler
    buttonClickHandlers
];
