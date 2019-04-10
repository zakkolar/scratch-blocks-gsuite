# Scratch Blocks for Google

This repo ports the [Scratch Blocks Generator](https://github.com/scratchblocks/scratchblocks) by [tjvr](https://github.com/tjvr) into Google Docs and Google Slides for educators to quickly and easily create materials related to Scratch.

The add-on sidebar is a tweaked version of the code for the Scratch Blocks Generator [GitHub Page](https://github.com/scratchblocks/scratchblocks.github.io).

## Development/modification

1. Install Google's [clasp tool](https://github.com/google/clasp):

   `npm i @google/clasp -g`
   
2. Log into your Google Apps Script account via clasp

   `clasp login`
   
3. Clone/download this repo

4. Run `npm install`

5. The first time through, run `npm run build`

   This will create the necessary build folders.
   
6. Configure the `dist/scratch-blocks-docs` and `dist/scratch-blocks-slides` folder to point to a Google Apps Script project. Create a `.clasp.json` file in each folder with the following contents:

   ```
   {
     "scriptId": "your-script-id"
   }
   ```

7. Develop the code. When you're ready to push it to the Google Apps Script server, run `npm run dev`
   
   **Note**: The `dev` command will not create a deployment. It will just push a copy of your code to the specified project for development purposes
   
   
   
## Without clasp

If you prefer to develop without clasp, just run `npm run build` and manually copy the output in `dist/scratch-blocks-docs` and `dist/scratch-blocks-slides` to your Google Apps Script project.