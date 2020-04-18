"use strict";

import gulp from "gulp";
const smartgrid = require("smart-grid");

gulp.task("smart-grid", (cb) => {
    smartgrid("./src/styles/vendor/import/", {
        outputStyle: "scss",
        filename: "_smart-grid",
        columns: 12, // number of grid columns
        offset: "1.875rem", // gutter width - 30px
        mobileFirst: false,
        mixinNames: {
            container: "container"
        },
        container: {
            maxWidth: "82rem",
            fields: "0.9375rem" // side fields - 15px
        },
        breakPoints: {
            xs: {
                width: "26.25rem" // 420px
            },
            xsm: {
                width: "41.25rem" // 660px
            },
            sm: {
                width: "47.5rem" // 760px
            },
            md: {
                width: "62rem" // 992px
            },
            lg: {
                width: "70rem" // 1120px
            },
            xl: {
                width: "75rem" // 1200px
            }
        }
    });
    cb();
});
