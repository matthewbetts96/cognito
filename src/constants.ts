/**
 * Constants file to store variables that are used in the app that either
 * could change per env or things that you'd consider "magic numbers"
 */
export const BASE_URL =
  "https://s3.eu-west-2.amazonaws.com/techassessment.cognitoedu.org/";
export const BASE_TIMEOUT = 10000;
export const STALE_TIME = 5 * 60 * 1000;

// The size at which mobile styling will start if the
// window width is less than this number, this will apply
// the styling to mobiles and smaller tablets whose screens
// better fit the mobile style
export const MOBILE_SIZE_BREAKPOINT = 768;
