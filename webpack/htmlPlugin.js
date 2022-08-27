module.exports = {
    title: "dataReachable",
    template: "./public/index.html",
    favicon: "./public/favicon.ico",
    meta: {
        viewport: "width=device-width, initial-scale=1, shrink-to-fit=no",
        "apple-mobile-web-app-capable": "yes",
        "apple-mobile-web-app-status-bar-style": "black",
        "apple-mobile-web-app-title": "DataReachable",
        description: "DataReachable",
        "theme-color": "#2F3BA2",
    },
    templateParameters: {
        loading: `<style>
                * {
                    margin: 0;
                    padding: 0;
                }
                .loadingWrapper {
                    height: 100vh;
                    display: flex;
                    align-items: center;
                }

                .loadingFormCol {
                    width: 100%;
                }

                .loadingPageWrapper {
                    margin: auto;
                    width: 90%;
                    text-align: center;
                }

                .loadingPageTitle {
                    font: normal normal normal 50px poppins-semibold, poppins, sans-serif;
                    letter-spacing: 1rem;
                    margin-top: 0.5rem;
                    color: #fd6b0b;
                    font-size: 42px;
                    @media screen and (max-width: 767px) {
                        font-size: 19px;
                    }
                }

                .loadingAnimation {
                    font-family: Helvatica, lato, sans-serif;
                    font-size: 14px;
                    margin: auto;
                    font-weight: bold;
                    margin-top: 3rem;
                }

                .cubeGrid {
                    width: 40px;
                    height: 40px;
                    margin: 10px auto;
                }

                .loadingCube {
                    width: 33%;
                    height: 33%;
                    background-color: #fd6b0b;
                    float: left;
                    -webkit-animation: loadingCubeGridScaleDelay 1.3s infinite ease-in-out;
                    animation: loadingCubeGridScaleDelay 1.3s infinite ease-in-out;
                }

                .loadingCube1 {
                    -webkit-animation-delay: 0.2s;
                    animation-delay: 0.2s;
                }

                .loadingCube2 {
                    -webkit-animation-delay: 0.3s;
                    animation-delay: 0.3s;
                }

                .loadingCube3 {
                    -webkit-animation-delay: 0.4s;
                    animation-delay: 0.4s;
                }

                .loadingCube4 {
                    -webkit-animation-delay: 0.1s;
                    animation-delay: 0.1s;
                }

                .loadingCube5 {
                    -webkit-animation-delay: 0.2s;
                    animation-delay: 0.2s;
                }

                .loadingCube6 {
                    -webkit-animation-delay: 0.3s;
                    animation-delay: 0.3s;
                }

                .loadingCube7 {
                    -webkit-animation-delay: 0s;
                    animation-delay: 0s;
                }

                .loadingCube8 {
                    -webkit-animation-delay: 0.1s;
                    animation-delay: 0.1s;
                }

                .loadingCube9 {
                    -webkit-animation-delay: 0.2s;
                    animation-delay: 0.2s;
                }

                @-webkit-keyframes loadingCubeGridScaleDelay {
                    0%,
                    70%,
                    100% {
                        -webkit-transform: scale3D(1, 1, 1);
                        transform: scale3D(1, 1, 1);
                    }
                    35% {
                        -webkit-transform: scale3D(0, 0, 1);
                        transform: scale3D(0, 0, 1);
                    }
                }

                @keyframes loadingCubeGridScaleDelay {
                    0%,
                    70%,
                    100% {
                        -webkit-transform: scale3D(1, 1, 1);
                        transform: scale3D(1, 1, 1);
                    }
                    35% {
                        -webkit-transform: scale3D(0, 0, 1);
                        transform: scale3D(0, 0, 1);
                    }
                }
            </style>
            <div class="loadingWrapper">
                <div class="loadingFormCol">
                    <div class="loadingPageWrapper">
                        <div class="loadingPageTitle">DataReachable</div>
                        <div class="loadingAnimation">
                            <div class="cubeGrid">
                                <div class="loadingCube1 loadingCube"></div>
                                <div class="loadingCube2 loadingCube"></div>
                                <div class="loadingCube3 loadingCube"></div>
                                <div class="loadingCube4 loadingCube"></div>
                                <div class="loadingCube5 loadingCube"></div>
                                <div class="loadingCube6 loadingCube"></div>
                                <div class="loadingCube7 loadingCube"></div>
                                <div class="loadingCube8 loadingCube"></div>
                                <div class="loadingCube9 loadingCube"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`,
            loadingV2:` <style>
                * {
                    margin: 0;
                    padding: 0;
                }
                .loadingv2_wrapper {
                    height: 100vh;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                .layer_fill_path {
                    fill: #c5ebef;
                }
                .layer_default_path {
                    fill: #22a6b3;
                }
                @keyframes fill {
                    0% {
                        x: -624
                    }
                    100% {
                        x: 0
                    }
                }
                @keyframes up {
                    0% {
                        y: 60
                    }
                    100% {
                        y: 0
                    }
                }
            </style>
            <div class="loadingv2_wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="624" height="6rem">
                    <defs>
                        <pattern id="water" width=".25" height="1.1" patternContentUnits="objectBoundingBox">
                            <path fill="#c5ebef"
                                d="M0.25,1H0c0,0,0-0.659,0-0.916c0.083-0.303,0.158,0.334,0.25,0C0.25,0.327,0.25,1,0.25,1z">
                            </path>
                        </pattern>
                        <g transform="scale(0.4)" id="layer_fill_outer" data-name="layer fill outer">
                            <g id="layer_fill_inner" data-name="layer fill inner">
                                <path class="layer_fill_path"
                                    d="M1443,10.73,1425,133.27a12.9,12.9,0,0,1-12.3,10.73h-14.54a9.08,9.08,0,0,1-9.16-10.73L1407,10.73A12.91,12.91,0,0,1,1419.26,0h14.54A9.07,9.07,0,0,1,1443,10.73Z">
                                </path>
                                <path class="layer_fill_path"
                                    d="M336.92,72a9.71,9.71,0,0,0,9.26-8.07l2.9-19.86A6.82,6.82,0,0,0,342.19,36H323.26L327,10.73A9.07,9.07,0,0,0,317.8,0H303.26A12.91,12.91,0,0,0,291,10.73L287.26,36H276.84a9.71,9.71,0,0,0-9.26,8.07l-2.9,19.86A6.82,6.82,0,0,0,271.57,72H282l-7.25,49.5C272.93,133.93,281.53,144,294,144h33.9a8,8,0,0,0,7.57-6.6l3.33-22.8a5.58,5.58,0,0,0-5.63-6.6H321.65A7.52,7.52,0,0,1,314,99.08L318,72Z">
                                </path>
                                <path class="layer_fill_path"
                                    d="M110.8,0H96.27A12.91,12.91,0,0,0,84,10.73l-4.51,30.8A41.32,41.32,0,0,0,58,35.76c-27.34,0-53,24.18-57.41,54s14.26,54,41.6,54a51.25,51.25,0,0,0,24.06-6.26,9,9,0,0,0,8.9,6.5H89.73A12.9,12.9,0,0,0,102,133.27L120,10.73A9.07,9.07,0,0,0,110.8,0Zm-61,116.52c-10.3,0-16.9-12-14.73-26.76S47.36,63,57.66,63,74.56,75,72.4,89.76,60.13,116.52,49.83,116.52Z">
                                </path>
                                <path class="layer_fill_path"
                                    d="M1335.8,35.76a51,51,0,0,0-23.11,5.77l4.51-30.8A9.08,9.08,0,0,0,1308,0H1293.5a12.9,12.9,0,0,0-12.3,10.73l-17.93,122.54a9.07,9.07,0,0,0,9.16,10.73H1287a12.88,12.88,0,0,0,10.81-6.5,41.22,41.22,0,0,0,22.22,6.26c27.34,0,53-24.18,57.41-54S1363.14,35.76,1335.8,35.76Zm-15.43,80.76c-10.3,0-16.9-12-14.74-26.76S1317.9,63,1328.2,63s16.9,12,14.73,26.76S1330.67,116.52,1320.37,116.52Z">
                                </path>
                                <path class="layer_fill_path"
                                    d="M233,36H215.56a11.16,11.16,0,0,0-9.5,5.9,41.3,41.3,0,0,0-22-6.14c-27.34,0-53,24.18-57.41,54s14.26,54,41.6,54a51.11,51.11,0,0,0,23.66-6.06,7.77,7.77,0,0,0,7.86,6.3h17.41a11.17,11.17,0,0,0,10.66-9.29L240.9,45.29A7.85,7.85,0,0,0,233,36Zm-57.14,80.52c-10.3,0-16.9-12-14.73-26.76S173.36,63,183.66,63s16.9,12,14.74,26.76S186.13,116.52,175.83,116.52Z">
                                </path>
                                <path class="layer_fill_path"
                                    d="M476,36H458.56a11.16,11.16,0,0,0-9.5,5.9,41.3,41.3,0,0,0-22-6.14c-27.34,0-53,24.18-57.41,54s14.26,54,41.6,54a51.11,51.11,0,0,0,23.66-6.06,7.77,7.77,0,0,0,7.86,6.3h17.41a11.17,11.17,0,0,0,10.66-9.29L483.9,45.29A7.85,7.85,0,0,0,476,36Zm-57.14,80.52c-10.3,0-16.9-12-14.73-26.76S416.36,63,426.66,63s16.9,12,14.74,26.76S429.13,116.52,418.83,116.52Z">
                                </path>
                                <path class="layer_fill_path"
                                    d="M872,36H854.56a11.16,11.16,0,0,0-9.5,5.9,41.3,41.3,0,0,0-22-6.14c-27.34,0-53,24.18-57.41,54s14.26,54,41.6,54a51.11,51.11,0,0,0,23.66-6.06,7.77,7.77,0,0,0,7.86,6.3h17.41a11.17,11.17,0,0,0,10.66-9.29L879.9,45.29A7.85,7.85,0,0,0,872,36Zm-57.14,80.52c-10.3,0-16.9-12-14.73-26.76S812.36,63,822.66,63s16.9,12,14.74,26.76S825.13,116.52,814.83,116.52Z">
                                </path>
                                <path class="layer_fill_path"
                                    d="M1250,36h-17.41a11.16,11.16,0,0,0-9.5,5.9,41.3,41.3,0,0,0-22-6.14c-27.34,0-53,24.18-57.41,54s14.26,54,41.6,54a51.11,51.11,0,0,0,23.66-6.06,7.77,7.77,0,0,0,7.86,6.3h17.41a11.17,11.17,0,0,0,10.66-9.29l13.08-89.42A7.85,7.85,0,0,0,1250,36Zm-57.14,80.52c-10.3,0-16.9-12-14.73-26.76S1190.36,63,1200.66,63s16.9,12,14.74,26.76S1203.13,116.52,1192.83,116.52Z">
                                </path>
                                <path class="layer_fill_path"
                                    d="M627.29,49.5c4-27.29-15-49.5-42.26-49.5H540c-12.43,0-24,10.07-25.79,22.5L503,99l-5,34.27A9.08,9.08,0,0,0,507.19,144h14.54A12.9,12.9,0,0,0,534,133.27L539,99h28.48l10.29,37.41c1.15,4.17,5.51,7.59,9.68,7.59h20.82c4.18,0,6.65-3.42,5.5-7.59L600.93,89.58C614.65,80.57,624.88,66,627.29,49.5Zm-79-13.5h31.5c7.44,0,12.62,6.06,11.53,13.5A16.21,16.21,0,0,1,575.81,63h-31.5Z">
                                </path>
                                <path class="layer_fill_path"
                                    d="M746.52,94.49c.36-1.57.65-3.16.88-4.77,4-28.56-15.25-52.34-43.58-53.66-31.3-1.46-61,24.11-64.66,55.49-3.38,28.56,16.6,51.8,45.06,52.44,21.79.49,42.6-12,54.22-30.32,1.66-2.62.21-5.67-2.7-5.67H706.22a4.57,4.57,0,0,0-3.4,1.66c-3.89,4.55-8.63,7.34-13.41,7.34-7.16,0-12.41-6.26-14-15.33A2.39,2.39,0,0,1,677.73,99H741A5.92,5.92,0,0,0,746.52,94.49ZM697.31,63c7.15,0,12.4,6.23,14,15.28A2.43,2.43,0,0,1,708.94,81H680.35a1.75,1.75,0,0,1-1.52-2.65C683.06,69.27,690.15,63,697.31,63Z">
                                </path>
                                <path class="layer_fill_path"
                                    d="M1556.52,94.49c.36-1.57.65-3.16.88-4.77,4-28.56-15.25-52.34-43.58-53.66-31.3-1.46-61,24.11-64.66,55.49-3.38,28.56,16.6,51.8,45.06,52.44,21.79.49,42.6-12,54.22-30.32,1.66-2.62.21-5.67-2.7-5.67h-29.52a4.57,4.57,0,0,0-3.4,1.66c-3.89,4.55-8.63,7.34-13.41,7.34-7.16,0-12.41-6.26-14-15.33a2.39,2.39,0,0,1,2.31-2.67H1551A5.92,5.92,0,0,0,1556.52,94.49ZM1507.31,63c7.15,0,12.4,6.23,14,15.28a2.43,2.43,0,0,1-2.35,2.72h-28.59a1.75,1.75,0,0,1-1.52-2.65C1493.06,69.27,1500.15,63,1507.31,63Z">
                                </path>
                                <path class="layer_fill_path"
                                    d="M941.48,116.52c-10.3,0-16.9-12-14.73-26.76S939,63,949.31,63c6.83,0,12,5.27,14.13,13.13A6.47,6.47,0,0,0,969.87,81h23.7c3.36,0,6.3-3.24,5.81-6.46-3.52-23.16-23.12-39.8-49-38.47-27.87,1.44-53.51,24.06-58.65,51.74C886,118.63,906.91,144,937.46,144c24.42,0,47.45-16.22,57.37-38.49,1.44-3.24-.51-6.51-3.9-6.51H967a9.28,9.28,0,0,0-7.8,4.78C954.84,111.42,948.2,116.52,941.48,116.52Z">
                                </path>
                                <path class="layer_fill_path"
                                    d="M1126.83,80l-8.09,55.28a10.5,10.5,0,0,1-10,8.72h-18.56a7.36,7.36,0,0,1-7.44-8.72L1090.68,81c1.33-9.12-4.35-16.66-13-17.83a.8.8,0,0,0-.15,0l-.31,0h-.15l-.14,0-.66,0-1,0-1,0a21.68,21.68,0,0,0-17,10.57,20.23,20.23,0,0,0-2.67,7.41L1047,133.27a12.9,12.9,0,0,1-12.3,10.73h-14.54a9.08,9.08,0,0,1-9.16-10.73L1029,10.73A12.91,12.91,0,0,1,1041.26,0h14.54A9.07,9.07,0,0,1,1065,10.73L1060.09,44a54,54,0,0,1,9-4.89,48.78,48.78,0,0,1,19.37-4.1C1113.26,35,1130.46,55.15,1126.83,80Z">
                                </path>
                            </g>
                        </g>
                        <g transform="scale(0.4)" id="layer_default_outer" data-name="layer default outer">
                            <g id="layer_default_inner" data-name="layer default inner">
                                <path class="layer_default_path"
                                    d="M1435.8,6a5.24,5.24,0,0,1,4.06,1.73,5.42,5.42,0,0,1,1.14,4.42l-17.93,122.54a8.87,8.87,0,0,1-8.34,7.31h-14.54a5.24,5.24,0,0,1-4.06-1.73,5.42,5.42,0,0,1-1.14-4.42l17.93-122.54A8.87,8.87,0,0,1,1421.26,6h14.54m0-4h-14.54A12.91,12.91,0,0,0,1409,12.73L1391,135.27a9.08,9.08,0,0,0,9.16,10.73h14.54a12.9,12.9,0,0,0,12.3-10.73L1445,12.73A9.07,9.07,0,0,0,1435.8,2Z"
                                    transform="translate(-2 -2)"></path>
                                <path class="layer_default_path"
                                    d="M319.8,6a5.24,5.24,0,0,1,4.06,1.73A5.42,5.42,0,0,1,325,12.15l-3.69,25.27L320.64,42h23.55a2.92,2.92,0,0,1,2.3,1,3.08,3.08,0,0,1,.63,2.54l-2.9,19.85a5.71,5.71,0,0,1-5.3,4.65H316.54l-.5,3.42-4,27.08a11.94,11.94,0,0,0,2.65,9.54,11.6,11.6,0,0,0,8.93,4h11.48a1.68,1.68,0,0,1,1.33.53,1.83,1.83,0,0,1,.34,1.49l-3.33,22.8a4,4,0,0,1-3.61,3.18H296a15.32,15.32,0,0,1-11.85-5.12,15.72,15.72,0,0,1-3.4-12.8L288,74.58l.67-4.58H273.57a2.91,2.91,0,0,1-2.3-1,3.08,3.08,0,0,1-.63-2.54l2.9-19.85a5.71,5.71,0,0,1,5.3-4.65h13.88l.5-3.42,3.7-25.27A8.87,8.87,0,0,1,305.26,6H319.8m0-4H305.26A12.91,12.91,0,0,0,293,12.73L289.26,38H278.84a9.71,9.71,0,0,0-9.26,8.07l-2.9,19.86A6.82,6.82,0,0,0,273.57,74H284l-7.25,49.5C274.93,135.93,283.53,146,296,146h33.9a8,8,0,0,0,7.57-6.6l3.33-22.8a5.58,5.58,0,0,0-5.63-6.6H323.65a7.52,7.52,0,0,1-7.62-8.92L320,74h18.92a9.71,9.71,0,0,0,9.26-8.07l2.9-19.86A6.82,6.82,0,0,0,344.19,38H325.26L329,12.73A9.07,9.07,0,0,0,319.8,2Z"
                                    transform="translate(-2 -2)"></path>
                                <path class="layer_default_path"
                                    d="M112.8,6a5.24,5.24,0,0,1,4.06,1.73A5.42,5.42,0,0,1,118,12.15L100.07,134.69A8.87,8.87,0,0,1,91.73,142H77.19a5,5,0,0,1-5.06-3.6l-1.36-4.76L66.41,136a47.51,47.51,0,0,1-22.18,5.79,36.6,36.6,0,0,1-28.17-12.61C8,119.81,4.54,106.39,6.59,92.34,10.67,64.45,34.65,41.76,60,41.76A37.08,37.08,0,0,1,79.4,47L84.54,50l.87-5.93,4.51-30.8A8.87,8.87,0,0,1,98.27,6H112.8m-61,116.52c12.4,0,24-13.26,26.52-30.18,1.46-9.94-.7-19.37-5.78-25.24A16.94,16.94,0,0,0,59.66,61c-12.39,0-24,13.26-26.52,30.18-1.46,9.94.71,19.37,5.78,25.24a16.94,16.94,0,0,0,12.91,6.1M112.8,2H98.27A12.91,12.91,0,0,0,86,12.73l-4.51,30.8A41.32,41.32,0,0,0,60,37.76c-27.34,0-53,24.18-57.41,54s14.26,54,41.6,54a51.25,51.25,0,0,0,24.06-6.26,9,9,0,0,0,8.9,6.5H91.73A12.9,12.9,0,0,0,104,135.27L122,12.73A9.07,9.07,0,0,0,112.8,2Zm-61,116.52c-10.3,0-16.9-12-14.73-26.76S49.36,65,59.66,65,76.56,77,74.4,91.76s-12.27,26.76-22.57,26.76Z"
                                    transform="translate(-2 -2)"></path>
                                <path class="layer_default_path"
                                    d="M1310,6a5.21,5.21,0,0,1,4,1.73,5.42,5.42,0,0,1,1.15,4.42L1310.73,43l-1.12,7.66,6.9-3.51a46.65,46.65,0,0,1,21.29-5.34A36.6,36.6,0,0,1,1366,54.37c8.07,9.34,11.53,22.76,9.47,36.81-4.08,27.89-28.06,50.58-53.45,50.58a37,37,0,0,1-20.08-5.64l-3.52-2.22-2.08,3.59A8.9,8.9,0,0,1,1289,142h-14.53a5.24,5.24,0,0,1-4.06-1.73,5.42,5.42,0,0,1-1.14-4.42l17.93-122.54A8.87,8.87,0,0,1,1295.5,6H1310m12.33,116.52c12.39,0,24.05-13.26,26.52-30.18,1.46-9.94-.7-19.37-5.78-25.24A16.94,16.94,0,0,0,1330.2,61c-12.4,0-24,13.26-26.52,30.18-1.46,9.94.7,19.37,5.78,25.24a16.94,16.94,0,0,0,12.91,6.1M1310,2H1295.5a12.9,12.9,0,0,0-12.3,10.73l-17.93,122.54a9.07,9.07,0,0,0,9.16,10.73H1289a12.88,12.88,0,0,0,10.81-6.5,41.22,41.22,0,0,0,22.22,6.26c27.34,0,53-24.18,57.41-54s-14.26-54-41.6-54a51,51,0,0,0-23.11,5.77l4.51-30.8A9.08,9.08,0,0,0,1310,2Zm12.33,116.52c-10.3,0-16.9-12-14.74-26.76S1319.9,65,1330.2,65s16.9,12,14.73,26.76-12.26,26.76-22.56,26.76Z"
                                    transform="translate(-2 -2)"></path>
                                <path class="layer_default_path"
                                    d="M186,41.76a37,37,0,0,1,19.9,5.53l3.61,2.25,2-3.73a7.13,7.13,0,0,1,6-3.81H235a4,4,0,0,1,3.11,1.31,4.21,4.21,0,0,1,.87,3.41l-13.09,89.41a7.23,7.23,0,0,1-6.7,5.87H201.75a3.77,3.77,0,0,1-3.94-3.07l-1-5.25L192,136.16a46.78,46.78,0,0,1-21.81,5.6,36.6,36.6,0,0,1-28.17-12.61c-8.07-9.34-11.52-22.76-9.47-36.81,4.08-27.89,28.06-50.58,53.45-50.58m-8.21,80.76c12.4,0,24-13.26,26.52-30.18,1.46-9.94-.7-19.37-5.78-25.24A16.94,16.94,0,0,0,185.66,61c-12.39,0-24,13.26-26.52,30.18-1.46,9.94.71,19.37,5.78,25.24a16.94,16.94,0,0,0,12.91,6.1M186,37.76c-27.34,0-53,24.18-57.41,54s14.26,54,41.6,54a51.11,51.11,0,0,0,23.66-6.06,7.77,7.77,0,0,0,7.86,6.3h17.41a11.17,11.17,0,0,0,10.66-9.29L242.9,47.29A7.85,7.85,0,0,0,235,38H217.56a11.16,11.16,0,0,0-9.5,5.9,41.3,41.3,0,0,0-22-6.14Zm-8.21,80.76c-10.3,0-16.9-12-14.73-26.76S175.36,65,185.66,65s16.9,12,14.74,26.76-12.27,26.76-22.57,26.76Z"
                                    transform="translate(-2 -2)"></path>
                                <path class="layer_default_path"
                                    d="M429,41.76a37,37,0,0,1,19.9,5.53l3.61,2.25,2-3.73a7.13,7.13,0,0,1,6-3.81H478a4,4,0,0,1,3.11,1.31,4.21,4.21,0,0,1,.87,3.41l-13.09,89.41a7.23,7.23,0,0,1-6.7,5.87H444.75a3.77,3.77,0,0,1-3.94-3.07l-1-5.25L435,136.16a46.78,46.78,0,0,1-21.81,5.6,36.6,36.6,0,0,1-28.17-12.61c-8.07-9.34-11.52-22.76-9.47-36.81,4.08-27.89,28.06-50.58,53.45-50.58m-8.21,80.76c12.4,0,24.05-13.26,26.52-30.18,1.46-9.94-.7-19.37-5.78-25.24A16.94,16.94,0,0,0,428.66,61c-12.39,0-24,13.26-26.52,30.18-1.46,9.94.71,19.37,5.78,25.24a16.94,16.94,0,0,0,12.91,6.1M429,37.76c-27.34,0-53,24.18-57.41,54s14.26,54,41.6,54a51.11,51.11,0,0,0,23.66-6.06,7.77,7.77,0,0,0,7.86,6.3h17.41a11.17,11.17,0,0,0,10.66-9.29L485.9,47.29A7.85,7.85,0,0,0,478,38H460.56a11.16,11.16,0,0,0-9.5,5.9,41.3,41.3,0,0,0-22-6.14Zm-8.21,80.76c-10.3,0-16.9-12-14.73-26.76S418.36,65,428.66,65s16.9,12,14.74,26.76-12.27,26.76-22.57,26.76Z"
                                    transform="translate(-2 -2)"></path>
                                <path class="layer_default_path"
                                    d="M825,41.76a37,37,0,0,1,19.9,5.53l3.61,2.25,2-3.73a7.13,7.13,0,0,1,6-3.81H874a4,4,0,0,1,3.11,1.31,4.21,4.21,0,0,1,.87,3.41l-13.09,89.41a7.23,7.23,0,0,1-6.7,5.87H840.75a3.77,3.77,0,0,1-3.94-3.07l-1-5.25L831,136.16a46.78,46.78,0,0,1-21.81,5.6,36.6,36.6,0,0,1-28.17-12.61c-8.07-9.34-11.52-22.76-9.47-36.81,4.08-27.89,28.06-50.58,53.45-50.58m-8.21,80.76c12.4,0,24-13.26,26.52-30.18,1.46-9.94-.7-19.37-5.78-25.24A16.94,16.94,0,0,0,824.66,61c-12.39,0-24,13.26-26.52,30.18-1.46,9.94.71,19.37,5.78,25.24a16.94,16.94,0,0,0,12.91,6.1M825,37.76c-27.34,0-53,24.18-57.41,54s14.26,54,41.6,54a51.11,51.11,0,0,0,23.66-6.06,7.77,7.77,0,0,0,7.86,6.3h17.41a11.17,11.17,0,0,0,10.66-9.29L881.9,47.29A7.85,7.85,0,0,0,874,38H856.56a11.16,11.16,0,0,0-9.5,5.9,41.3,41.3,0,0,0-22-6.14Zm-8.21,80.76c-10.3,0-16.9-12-14.73-26.76S814.36,65,824.66,65s16.9,12,14.74,26.76-12.27,26.76-22.57,26.76Z"
                                    transform="translate(-2 -2)"></path>
                                <path class="layer_default_path"
                                    d="M1203,41.76a37,37,0,0,1,19.9,5.53l3.61,2.25,2-3.73a7.13,7.13,0,0,1,6-3.81H1252a4,4,0,0,1,3.11,1.31,4.21,4.21,0,0,1,.87,3.41l-13.09,89.41a7.22,7.22,0,0,1-6.7,5.87h-17.41a3.77,3.77,0,0,1-3.94-3.07l-1-5.25-4.74,2.48a46.78,46.78,0,0,1-21.81,5.6,36.6,36.6,0,0,1-28.17-12.61c-8.07-9.34-11.52-22.76-9.47-36.81,4.08-27.89,28.06-50.58,53.45-50.58m-8.21,80.76c12.4,0,24.05-13.26,26.52-30.18,1.46-9.94-.7-19.37-5.78-25.24a16.94,16.94,0,0,0-12.91-6.1c-12.39,0-24,13.26-26.52,30.18-1.46,9.94.71,19.37,5.78,25.24a16.94,16.94,0,0,0,12.91,6.1M1203,37.76c-27.34,0-53,24.18-57.41,54s14.26,54,41.6,54a51.11,51.11,0,0,0,23.66-6.06,7.77,7.77,0,0,0,7.86,6.3h17.41a11.17,11.17,0,0,0,10.66-9.29l13.08-89.42A7.85,7.85,0,0,0,1252,38h-17.41a11.16,11.16,0,0,0-9.5,5.9,41.3,41.3,0,0,0-22-6.14Zm-8.21,80.76c-10.3,0-16.9-12-14.73-26.76S1192.36,65,1202.66,65s16.9,12,14.74,26.76-12.27,26.76-22.57,26.76Z"
                                    transform="translate(-2 -2)"></path>
                                <path class="layer_default_path"
                                    d="M587,6c11.92,0,22.46,4.6,29.68,13s10.4,19.84,8.62,32c-2.15,14.66-11.34,28.61-24.6,37.31l-2.43,1.6.77,2.81L612,139.47a2.28,2.28,0,0,1-.16,2,1.84,1.84,0,0,1-1.49.56H589.49a6.79,6.79,0,0,1-5.82-4.65L573.38,99.94,572.57,97h-35l-.5,3.42-5,34.27a8.87,8.87,0,0,1-8.34,7.31H509.19a5.24,5.24,0,0,1-4.06-1.73,5.42,5.42,0,0,1-1.14-4.42l5-34.27,11.2-76.5C521.74,14.56,531.53,6,542,6h45M541.68,69h36.13c9.35,0,18.07-7.59,19.44-16.92a15.77,15.77,0,0,0-3.54-12.79,15.5,15.5,0,0,0-12-5.29h-35l-.5,3.42-3.95,27L541.68,69M587,2H542c-12.43,0-24,10.07-25.79,22.5L505,101l-5,34.27A9.08,9.08,0,0,0,509.19,146h14.54A12.9,12.9,0,0,0,536,135.27L541,101h28.48l10.29,37.41c1.15,4.17,5.51,7.59,9.68,7.59h20.82c4.18,0,6.65-3.42,5.5-7.59L602.93,91.58c13.72-9,24-23.62,26.36-40.08,4-27.29-15-49.5-42.26-49.5ZM546.31,65l4-27h31.5c7.44,0,12.62,6.06,11.53,13.5A16.21,16.21,0,0,1,577.81,65Z"
                                    transform="translate(-2 -2)"></path>
                                <path class="layer_default_path"
                                    d="M703.26,42c.79,0,1.59,0,2.37,0,12.38.58,23.31,5.85,30.75,14.83,7.66,9.24,10.88,21.42,9.06,34.28-.21,1.47-.48,3-.82,4.43A2,2,0,0,1,743,97H679.73a6.33,6.33,0,0,0-4.84,2.29,6.23,6.23,0,0,0-1.41,5.06c2,11.33,9,18.65,17.93,18.65,5.8,0,11.64-3.11,16.45-8.75a.86.86,0,0,1,.36-.25h28.54c-11,17-30.32,28-49.3,28h-1.15c-12.53-.28-23.68-5.33-31.39-14.2s-11.3-21-9.79-33.77c1.63-13.77,8.63-26.81,19.72-36.71S689.56,42,703.26,42M682.35,87h28.59a6.39,6.39,0,0,0,4.88-2.31,6.24,6.24,0,0,0,1.41-5.1c-2-11.29-9-18.59-17.92-18.59-8.57,0-17,6.77-22.11,17.66a6,6,0,0,0,.31,5.73A5.71,5.71,0,0,0,682.35,87m20.91-49c-30.33,0-58.49,25-62.1,55.55-3.38,28.56,16.6,51.8,45.06,52.44h1.24c21.33,0,41.58-12.37,53-30.33,1.66-2.62.21-5.67-2.7-5.67H708.22a4.57,4.57,0,0,0-3.4,1.66c-3.89,4.55-8.63,7.34-13.41,7.34-7.16,0-12.41-6.26-14-15.33a2.39,2.39,0,0,1,2.31-2.67H743a5.92,5.92,0,0,0,5.57-4.51c.36-1.57.65-3.16.88-4.77,4-28.56-15.25-52.34-43.58-53.66-.86,0-1.71-.06-2.56-.06ZM682.35,83a1.75,1.75,0,0,1-1.52-2.65C685.06,71.27,692.15,65,699.31,65s12.4,6.23,14,15.28A2.43,2.43,0,0,1,710.94,83Z"
                                    transform="translate(-2 -2)"></path>
                                <path class="layer_default_path"
                                    d="M1513.26,42c.79,0,1.59,0,2.37,0,12.38.58,23.31,5.85,30.75,14.83,7.66,9.24,10.88,21.42,9.06,34.28-.21,1.47-.48,3-.82,4.43A2,2,0,0,1,1553,97h-63.22a6.33,6.33,0,0,0-4.84,2.29,6.23,6.23,0,0,0-1.41,5.06c2,11.33,9,18.65,17.93,18.65,5.8,0,11.64-3.11,16.45-8.75a.86.86,0,0,1,.36-.25h28.54c-11,17-30.32,28-49.3,28h-1.15c-12.53-.28-23.68-5.33-31.39-14.2s-11.3-21-9.79-33.77c1.63-13.77,8.63-26.81,19.72-36.71S1499.56,42,1513.26,42m-20.91,45h28.59a6.39,6.39,0,0,0,4.88-2.31,6.26,6.26,0,0,0,1.41-5.1c-2-11.29-9-18.59-17.92-18.59-8.57,0-17,6.77-22.11,17.66a6,6,0,0,0,.31,5.73,5.71,5.71,0,0,0,4.84,2.61m20.91-49c-30.33,0-58.49,25-62.1,55.55-3.38,28.56,16.6,51.8,45.06,52.44h1.24c21.33,0,41.58-12.37,53-30.33,1.66-2.62.21-5.67-2.7-5.67h-29.52a4.57,4.57,0,0,0-3.4,1.66c-3.89,4.55-8.63,7.34-13.41,7.34-7.16,0-12.41-6.26-14-15.33a2.39,2.39,0,0,1,2.31-2.67H1553a5.92,5.92,0,0,0,5.57-4.51c.36-1.57.65-3.16.88-4.77,4-28.56-15.25-52.34-43.58-53.66-.86,0-1.71-.06-2.56-.06Zm-20.91,45a1.75,1.75,0,0,1-1.52-2.65c4.23-9.08,11.32-15.35,18.48-15.35s12.4,6.23,14,15.28a2.43,2.43,0,0,1-2.35,2.72Z"
                                    transform="translate(-2 -2)"></path>
                                <path class="layer_default_path"
                                    d="M955.26,38v4c10.9,0,20.71,3.44,28.36,10a41,41,0,0,1,13.8,25.18,1.52,1.52,0,0,1-.44,1.12,2,2,0,0,1-1.41.74h-23.7a2.46,2.46,0,0,1-2.56-1.9c-2.65-9.93-9.54-16.1-18-16.1-12.39,0-24,13.26-26.52,30.18-1.46,9.94.71,19.37,5.78,25.24a16.94,16.94,0,0,0,12.91,6.1c8,0,15.91-5.51,21.23-14.75A5.3,5.3,0,0,1,969,105h23.89c.08,0,.27,0,.33.09s.11.36-.09.8a62.78,62.78,0,0,1-21.84,25.91A56.72,56.72,0,0,1,939.46,142c-13.44,0-25.22-5.26-33.16-14.81-8.15-9.8-11.21-22.81-8.64-36.65,4.8-25.84,28.93-47.13,54.93-48.47.89,0,1.79-.07,2.67-.07V38m0,0c-1,0-1.91,0-2.88.07-27.87,1.44-53.51,24.06-58.65,51.74C888,120.63,908.91,146,939.46,146c24.42,0,47.45-16.22,57.37-38.49,1.44-3.24-.51-6.51-3.9-6.51H969a9.28,9.28,0,0,0-7.8,4.78c-4.4,7.64-11,12.74-17.76,12.74-10.3,0-16.9-12-14.73-26.76S941,65,951.31,65c6.83,0,12,5.27,14.13,13.13A6.47,6.47,0,0,0,971.87,83h23.7c3.36,0,6.3-3.24,5.81-6.46C998,54.25,979.71,38,955.26,38Z"
                                    transform="translate(-2 -2)"></path>
                                <path class="layer_default_path"
                                    d="M1057.8,6a5.24,5.24,0,0,1,4.06,1.73,5.42,5.42,0,0,1,1.14,4.42l-4.86,33.26-1.31,9,7.5-5.06a49.44,49.44,0,0,1,8.3-4.54A44.59,44.59,0,0,1,1090.41,41c10.75,0,20.24,4.13,26.72,11.63s9.34,17.85,7.74,28.79l-8.09,55.28a6.53,6.53,0,0,1-6,5.3h-18.56a3.55,3.55,0,0,1-2.73-1.14,3.69,3.69,0,0,1-.76-3l8-54.28a19.94,19.94,0,0,0-3.62-15,19,19,0,0,0-12.57-7.33l-.24-.05c-.26,0-.48-.06-.61-.07h0l-.35,0c-.25,0-.51,0-.82-.06l-1.1,0-1.1,0h-.08a25.58,25.58,0,0,0-20.21,12.51,23.94,23.94,0,0,0-3.2,8.88l-7.65,52.27a8.87,8.87,0,0,1-8.34,7.31h-14.54a5.24,5.24,0,0,1-4.06-1.73,5.42,5.42,0,0,1-1.14-4.42l17.93-122.54A8.87,8.87,0,0,1,1043.26,6h14.54m0-4h-14.54A12.91,12.91,0,0,0,1031,12.73L1013,135.27a9.08,9.08,0,0,0,9.16,10.73h14.54a12.9,12.9,0,0,0,12.3-10.73L1056.68,83a20.23,20.23,0,0,1,2.67-7.41,21.68,21.68,0,0,1,17-10.57l1,0,1,0,.66,0,.14,0h.15l.31,0a.8.8,0,0,1,.15,0c8.63,1.17,14.31,8.71,13,17.83l-7.94,54.28a7.36,7.36,0,0,0,7.44,8.72h18.56a10.5,10.5,0,0,0,10-8.72L1128.82,82c3.64-24.85-13.56-45-38.41-45A48.78,48.78,0,0,0,1071,41.1a54,54,0,0,0-9,4.89L1067,12.73A9.07,9.07,0,0,0,1057.8,2Z"
                                    transform="translate(-2 -2)"></path>
                            </g>
                        </g>
                    </defs>
                    <mask id="text_mask">
                        <use xlink:href="#layer_fill_outer"></use>
                    </mask>
                    <rect mask="url(#text_mask)" fill="url(#water)" width="1248px" height="6rem"
                        style="animation: 2s linear 0s infinite normal none running fill,5s linear 0s infinite normal none running up;"></rect>
                    <use xlink:href="#layer_default_outer" />
                </svg>
            </div>`
    },
};
