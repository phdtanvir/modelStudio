// SPECIAL CAUTION NEEDED WHEN EDITING THIS FILE; MAY CAUSE FATAL ERROR

function addCssToDocument(css) {
  // this function adds custom css to document head
  var style = document.createElement('style');
  style.innerText = css;
  document.head.appendChild(style);
}

// load tip:after related css (for triangle)
addCssToDocument("d3-tip:after{box-sizing:border-box;display:inline;font-size:10px;width:inherit;"+
"height:inherit;line-height:1;color:rgba(0,0,0,0.8);content:'\\25BC';position:absolute;text-align: center;}"+
".d3-tip.n:after{content:'\\25BC';position:absolute;margin:0 0 0 0;top:100%;left:50%;text-align:center;transform:translate(-7px,-15px)}"+
".d3-tip.e:after{content:'\\25C0';position:absolute;margin:0 0 0 0;top:50%;left:0%;text-align:center;transform:translate(0px,-7px)}"+
".d3-tip.s:after{content:'\\25B2';position:absolute;margin:0 0 0 0;top:0%;left:50%;text-align:center;transform:translate(-7px,0px)}"+
".d3-tip.w:after{content:'\\25B6';position:absolute;margin:0 0 0 0;top:50%;left:100%;text-align:center;transform:translate(-15px,-7px)}"+
".d3-tip.se:after{content:'\\25E4';position:absolute;margin:0 0 0 0;top:0%;left:0%;text-align:center;transform:translate(1px,1px)}"+
".d3-tip.ne:after{content:'\\25E3';position:absolute;margin:0 0 0 0;top:100%;left:0%;text-align:center;transform:translate(1px,-15px)}"+
".d3-tip.sw:after{content:'\\25E5';position:absolute;margin:0 0 0 0;top:0%;left:100%;text-align:center;transform:translate(-15px,1px)}"+
".d3-tip.nw:after{content:'\\25E2';position:absolute;margin:0 0 0 0;top:100%;left:100%;text-align:center;transform:translate(-14px,-16px)};");

// load Fira Sans fonts from googleapis
addCssToDocument("@font-face{font-family:'Fira Sans';font-style:normal;font-weight:400;font-display:swap;src:local('Fira Sans Regular'),local('FiraSans-Regular'),url(https://fonts.gstatic.com/s/firasans/v10/va9E4kDNxMZdWfMOD5VvmYjLeTY.woff2) format('woff2');unicode-range:U+0100-024F,U+0259,U+1E00-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:'Fira Sans';font-style:normal;font-weight:400;font-display:swap;src:local('Fira Sans Regular'),local('FiraSans-Regular'),url(https://fonts.gstatic.com/s/firasans/v10/va9E4kDNxMZdWfMOD5Vvl4jL.woff2) format('woff2');unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:'Fira Sans';font-style:normal;font-weight:500;font-display:swap;src:local('Fira Sans Medium'),local('FiraSans-Medium'),url(https://fonts.gstatic.com/s/firasans/v10/va9B4kDNxMZdWfMOD5VnZKveSBf6TF0.woff2) format('woff2');unicode-range:U+0100-024F,U+0259,U+1E00-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:'Fira Sans';font-style:normal;font-weight:500;font-display:swap;src:local('Fira Sans Medium'),local('FiraSans-Medium'),url(https://fonts.gstatic.com/s/firasans/v10/va9B4kDNxMZdWfMOD5VnZKveRhf6.woff2) format('woff2');unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:'Fira Sans';font-style:normal;font-weight:600;font-display:swap;src:local('Fira Sans SemiBold'),local('FiraSans-SemiBold'),url(https://fonts.gstatic.com/s/firasans/v10/va9B4kDNxMZdWfMOD5VnSKzeSBf6TF0.woff2) format('woff2');unicode-range:U+0100-024F,U+0259,U+1E00-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:'Fira Sans';font-style:normal;font-weight:600;font-display:swap;src:local('Fira Sans SemiBold'),local('FiraSans-SemiBold'),url(https://fonts.gstatic.com/s/firasans/v10/va9B4kDNxMZdWfMOD5VnSKzeRhf6.woff2) format('woff2');unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:'Fira Sans';font-style:normal;font-weight:700;font-display:swap;src:local('Fira Sans Bold'),local('FiraSans-Bold'),url(https://fonts.gstatic.com/s/firasans/v10/va9B4kDNxMZdWfMOD5VnLK3eSBf6TF0.woff2) format('woff2');unicode-range:U+0100-024F,U+0259,U+1E00-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:'Fira Sans';font-style:normal;font-weight:700;font-display:swap;src:local('Fira Sans Bold'),local('FiraSans-Bold'),url(https://fonts.gstatic.com/s/firasans/v10/va9B4kDNxMZdWfMOD5VnLK3eRhf6.woff2) format('woff2');unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}");

/*function ga() {
  var script = document.createElement('script');
  script.setAttribute('src', 'https://www.googletagmanager.com/gtag/js?id=UA-160640242-1');
  script.setAttribute('async', '');
  document.head.appendChild(script);

  var script2 = document.createElement('script');
  script2.innerText =   "window.dataLayer = window.dataLayer || [];" +
  "function gtag(){dataLayer.push(arguments);}" +
  "gtag('js', new Date()); gtag('config', 'UA-160640242-1');";
  document.head.appendChild(script2);
}*/

