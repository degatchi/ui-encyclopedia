## Quick Start
`yarn`
`yarn start`

## Summary
Everything inside of this folder is what I have created from scratch! I hope you find inspiration from my ideas within here. If you have any questions, please feel free to dm me on twitter @DeGatchi. 

### Explainations
- `Router`: Used to have multiple 'pages' that are really just components being rendered when `/...` is used. I.e. `/bakery`, `/home`, etc.
- `Lazy & Suspense`: The lazy function takes the dynamic imports and returns the promise which resloves the Component. With the suspense, we need to specify the fallback property so that suspense can load the fallback property at the time of that component is downloading. 

## Theory
- `Drip Button`: When the user clicks on the default button (that has no keyframe animations) it will switch the button to the styled button with the `spinDownOn` animation selected. After the tx is complete, the button will be switched to the `spinDownOff` animation (the user will be able to click the button mid animation so there are no unnecessary delays - the tx is complete, so why not allow them?), then back to the original.
- `Info Cards`: Hovering over the card makes a drip come down while the card pops out a bit; cursor off the card begins the return of the drip

## Todo

Connected Wallet:
- Add custom token when connected & add token symbol like SUSHISWAP when not connected

![image](https://user-images.githubusercontent.com/72078332/118517203-5d0da300-b77a-11eb-858f-cd4518648397.png)
