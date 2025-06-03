export const common = {
    breakpoints: {
        mobile: 767,
        tablet: 991,
    }
};

const colors = {
    white: "#FFFFFF",
    whiteLilac: "#FBFBFE",
    mineShaft: "#252525",
    mineShaftLight: "rgba(54, 54, 54, 0.72)",
    slateGray: "#6E7E91",
    mercury: "#E5E5E5",
    scienceBlue: "#0366D6",
    scienceBlueHover:"#0250A0",
    anakiwa: "#8CC2FF",
    iron: "rgba(209, 213, 218, 0.3)",
    dodgerBlue: "#2188FF",
    midnightNavy:"rgb(9, 10, 51, 0.03)",
    faintMidnightNavy:"rgba(9, 10, 51, 0.02)",
    waterBlue: "rgba(3, 102, 214, 0.2)",
}

export const ThemeLight = {
    ...common,
    colors: {
        anchor: {
            text: colors.scienceBlue,
            underline: colors.scienceBlue,
        },
        body: {
            background: colors.whiteLilac,
        },
        section: {
            background: colors.white,
            portfolio: {
                background: colors.whiteLilac,
            },
        },
        mainHeader: {
            background: colors.whiteLilac,
        },
        header: {
            headerName: colors.mineShaft,
            text: colors.mineShaft,
            border: colors.mercury,
            h3: colors.scienceBlue,
        },
        paragraph: {
            description: colors.slateGray,
            mainParagraph: colors.slateGray,
            footerParagraph: colors.mineShaft,
        },
        caption: {
            text: colors.slateGray,
        },
        link: {
            icon: colors.mineShaft,
            text: colors.scienceBlue,
            hover: colors.scienceBlue,
        },
        footerLink: {
            text: colors.mineShaft,
            hover: colors.scienceBlue,
        },
        list: {
            text: colors.slateGray,
            background: colors.whiteLilac,
            item: {
                background: colors.white,
                border: colors.iron,
                borderHover: colors.waterBlue,
                shadowTop: colors.midnightNavy,
                shadowBottom: colors.faintMidnightNavy,
            },
        },
        button: {
            background: colors.scienceBlue,
            backgroundHover: colors.anakiwa,
            text: colors.white,
        },
        buttonWrapper: {
            sun: colors.white,
            toggle: colors.slateGray,
            border: colors.slateGray,
            background: colors.mercury,
        },
        marker: {
            fill: colors.scienceBlue,
        },
        spinner: {
            fill: colors.scienceBlue,
        },
    },
};

export const ThemeDark = {
    ...common,
    colors: {
        anchor: {
            text: colors.scienceBlue,
            underline: colors.scienceBlue,
        },
        body: {
            background: colors.mineShaft,
        },
        section: {
            background: colors.mineShaftLight,
            portfolio: {
                background: colors.mineShaft,
            },
        },
        mainHeader: {
            background: colors.mineShaft,
        },
        header: {
            headerName: colors.white,
            text: colors.white,
            border: colors.mercury,
            h3: colors.white,
        },
        paragraph: {
            description: colors.white,
            mainParagraph: colors.white,
            footerParagraph: colors.white,
        },
        caption: {
            text: colors.white,
        },
        link: {
            icon: colors.white,
            text: colors.scienceBlue,
            hover: colors.dodgerBlue,
        },
        footerLink: {
            text: colors.white,
            hover: colors.dodgerBlue,
        },
        list: {
            text: colors.white,
            background: colors.mineShaft,
            item: {
                background: colors.mineShaftLight,
                border: colors.iron,
                borderHover: colors.waterBlue,
                shadowTop: colors.midnightNavy,
                shadowBottom: colors.faintMidnightNavy,
            }
        },
        button: {
            background: colors.scienceBlue,
            backgroundHover: colors.anakiwa,
            text: colors.white,
        },
        buttonWrapper: {
            sun: colors.mineShaft,
            toggle: colors.white,
            border: colors.white,
            background: colors.mineShaftLight,
        },
        marker: {
            fill: colors.dodgerBlue,
        },
        spinner: {
            fill: colors.dodgerBlue,
        },
    },
};