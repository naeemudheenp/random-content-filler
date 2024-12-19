# Random Content Filler for Strapi

During development, verifying your UI with content is crucial. The **Random Content Filler** plugin for Strapi streamlines this process by generating and populating your Strapi fields with random data, making UI testing seamless and efficient.

## Key Features
- **Effortless Data Generation:** Automatically fills your Strapi fields with random content.  
- **Time-Saving:** Quickly populate your fields with random content so that you can focus on dev rather than contents.  


## Installation
```bash
npm install strapi-random-content-filler
```
## Usage
1. Install the plugin in your Strapi project.  
2. Goto content manager screen.  
3. Click on ``` Fill Random Data ```  button to fill all fields with random data.  

## How to Disable the Plugin in Strapi

To disable a plugin in Strapi, update the configuration file. Add the following code to your `plugins.ts` or `plugins.js` file:

```javascript
"random-content-filler": {
  config: {
    enabled: false,
  },
},
```


## Flow

![Screenshot 1](https://i.ibb.co/ggxCg2f/1.png)  
![Screenshot 2](https://i.ibb.co/Wcc47qH/2.png)  
![Screenshot 3](https://i.ibb.co/zQKNtLT/3.png)

## Reporting Issues
If you encounter any bugs or have feature suggestions, please report them in the [Issues section](https://www.npmjs.com/package/strapi-random-content-filler).



