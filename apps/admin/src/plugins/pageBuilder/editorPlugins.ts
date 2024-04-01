// Elements
import accordion from "@webiny/app-page-builder/editor/plugins/elements/accordion";
import accordionItem from "@webiny/app-page-builder/editor/plugins/elements/accordionItem";
import block from "@webiny/app-page-builder/editor/plugins/elements/block";
import button from "@webiny/app-page-builder/editor/plugins/elements/button";
import carousel from "@webiny/app-page-builder/editor/plugins/elements/carousel";
import carouselElement from "@webiny/app-page-builder/editor/plugins/elements/carouselElement";
import cell from "@webiny/app-page-builder/editor/plugins/elements/cell";
import codesandbox from "@webiny/app-page-builder/editor/plugins/elements/code/codesandbox";
import document from "@webiny/app-page-builder/editor/plugins/elements/document";
import iframe from "@webiny/app-page-builder/editor/plugins/elements/embeds/iframe";
import soundcloud from "@webiny/app-page-builder/editor/plugins/elements/embeds/soundcloud";
import vimeo from "@webiny/app-page-builder/editor/plugins/elements/embeds/vimeo";
import youtube from "@webiny/app-page-builder/editor/plugins/elements/embeds/youtube";
import grid from "@webiny/app-page-builder/editor/plugins/elements/grid";
import heading from "@webiny/app-page-builder/editor/plugins/elements/heading";
import icon from "@webiny/app-page-builder/editor/plugins/elements/icon";
import image from "@webiny/app-page-builder/editor/plugins/elements/image";
import imagesList from "@webiny/app-page-builder/editor/plugins/elements/imagesList";
import list from "@webiny/app-page-builder/editor/plugins/elements/list";
import pagesList from "@webiny/app-page-builder/editor/plugins/elements/pagesList";
import paragraph from "@webiny/app-page-builder/editor/plugins/elements/paragraph";
import quote from "@webiny/app-page-builder/editor/plugins/elements/quote";
import pinterest from "@webiny/app-page-builder/editor/plugins/elements/social/pinterest";
import twitter from "@webiny/app-page-builder/editor/plugins/elements/social/twitter";
import tab from "@webiny/app-page-builder/editor/plugins/elements/tab";
import tabs from "@webiny/app-page-builder/editor/plugins/elements/tabs";
// Element groups
import basicGroup from "@webiny/app-page-builder/editor/plugins/elementGroups/basic";
import codeGroup from "@webiny/app-page-builder/editor/plugins/elementGroups/code";
import embedsGroup from "@webiny/app-page-builder/editor/plugins/elementGroups/embeds";
import formGroup from "@webiny/app-page-builder/editor/plugins/elementGroups/form";
import layoutGroup from "@webiny/app-page-builder/editor/plugins/elementGroups/layout";
import mediaGroup from "@webiny/app-page-builder/editor/plugins/elementGroups/media";
import savedGroup from "@webiny/app-page-builder/editor/plugins/elementGroups/saved";
import socialGroup from "@webiny/app-page-builder/editor/plugins/elementGroups/social";
// Blocks
import emptyBlock from "@webiny/app-page-builder/pageEditor/plugins/blocks/emptyBlock";
// Toolbar
import addElement from "@webiny/app-page-builder/editor/plugins/toolbar/addElement";
import navigator from "@webiny/app-page-builder/editor/plugins/toolbar/navigator";
import saving from "@webiny/app-page-builder/editor/plugins/toolbar/saving";
import { redo, undo } from "@webiny/app-page-builder/editor/plugins/toolbar/undoRedo";
// Element settings
import accordionSettings from "@webiny/app-page-builder/editor/plugins/elementSettings/accordion";
import accordionItemSettings from "@webiny/app-page-builder/editor/plugins/elementSettings/accordionItem";
import action from "@webiny/app-page-builder/editor/plugins/elementSettings/action";
import align from "@webiny/app-page-builder/editor/plugins/elementSettings/align";
import animation from "@webiny/app-page-builder/editor/plugins/elementSettings/animation";
import background from "@webiny/app-page-builder/editor/plugins/elementSettings/background";
import border from "@webiny/app-page-builder/editor/plugins/elementSettings/border";
import carouselSettings from "@webiny/app-page-builder/editor/plugins/elementSettings/carousel";
import carouselElementSettings from "@webiny/app-page-builder/editor/plugins/elementSettings/carouselElement";
import carouselStylesSettings from "@webiny/app-page-builder/editor/plugins/elementSettings/carouselStyles";
import cellSettings from "@webiny/app-page-builder/editor/plugins/elementSettings/cell";
import clone from "@webiny/app-page-builder/editor/plugins/elementSettings/clone";
import deleteElement from "@webiny/app-page-builder/editor/plugins/elementSettings/delete";
import gridSettings from "@webiny/app-page-builder/editor/plugins/elementSettings/grid";
import height from "@webiny/app-page-builder/editor/plugins/elementSettings/height";
import link from "@webiny/app-page-builder/editor/plugins/elementSettings/link";
import margin from "@webiny/app-page-builder/editor/plugins/elementSettings/margin";
import mirrorCell from "@webiny/app-page-builder/editor/plugins/elementSettings/mirror-cell";
import padding from "@webiny/app-page-builder/editor/plugins/elementSettings/padding";
import property from "@webiny/app-page-builder/editor/plugins/elementSettings/property";
import save from "@webiny/app-page-builder/editor/plugins/elementSettings/save";
import shadow from "@webiny/app-page-builder/editor/plugins/elementSettings/shadow";
import tabSettings from "@webiny/app-page-builder/editor/plugins/elementSettings/tab";
import tabsSettings from "@webiny/app-page-builder/editor/plugins/elementSettings/tabs";
import textSettings from "@webiny/app-page-builder/editor/plugins/elementSettings/text";
import width from "@webiny/app-page-builder/editor/plugins/elementSettings/width";
// Responsive editor mode
import responsiveEditorMode from "@webiny/app-page-builder/editor/plugins/responsiveMode";
// Page settings
import pageSettingsPlugins from "@webiny/app-page-builder/editor/plugins/pageSettings";
// default presets for grid
import { gridPresets } from "@webiny/app-page-builder/editor/plugins/gridPresets";

import spaceX from "./spaceX/admin";

export default [
    // Elements
    document(),
    grid(),
    block(),
    emptyBlock,
    cell(),
    heading(),
    paragraph(),
    list(),
    quote(),
    icon(),
    image(),
    imagesList(),
    button(),
    soundcloud(),
    vimeo(),
    youtube(),
    pinterest(),
    twitter(),
    iframe(),
    codesandbox(),
    pagesList(),
    accordion(),
    accordionItem(),
    tabs(),
    tab(),
    carousel(),
    carouselElement(),
    // grid presets
    ...gridPresets,
    // Element groups
    basicGroup,
    layoutGroup,
    formGroup,
    mediaGroup,
    embedsGroup,
    socialGroup,
    codeGroup,
    savedGroup,
    // Toolbar
    addElement,
    navigator(),
    saving,
    undo,
    redo,
    // Element settings
    animation,
    background,
    border,
    shadow,
    padding,
    margin,
    mirrorCell,
    align,
    clone,
    deleteElement,
    width,
    height,
    save,
    link,
    action,
    gridSettings,
    cellSettings,
    textSettings,
    property,
    accordionSettings,
    accordionItemSettings,
    tabsSettings,
    tabSettings,
    carouselSettings,
    carouselElementSettings,
    carouselStylesSettings,
    // Responsive editor mode
    responsiveEditorMode(),
    // Page settings
    pageSettingsPlugins,
    spaceX
];
