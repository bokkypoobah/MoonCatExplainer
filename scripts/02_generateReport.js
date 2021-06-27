var fs = require('fs');
const util = require('util');
require('./MoonCatRescueResults.js');

console.log("moonCatTotalSupply: " + moonCatTotalSupply);
console.log("moonCatRescueIndex: " + moonCatRescueIndex);
console.log("moonCatDetailsByRescueOrders: " + moonCatDetailsByRescueOrders.length);
console.log("moonCatGenesisCatsAddedEvents: " + moonCatGenesisCatsAddedEvents.length);

const lookup = {};
for (let i in moonCatRescueEvents) {
  const e = moonCatRescueEvents[i];
  lookup[e[5]] = { catId: e[5], tx: e[3], block: e[1], timestamp: e[6], by: e[4] };
}
// console.log(lookup);
for (let i in moonCatGenesisCatsAddedEvents) {
  const e = moonCatGenesisCatsAddedEvents[i];
  for (let j in e[4]) {
    const e1 = e[4][j];
    lookup[e1] = { catId: e1, tx: e[3], block: e[1], timestamp: e[5], by: "0xa97f8ffc8f8e354475880448334e4e99a0e7212f" };
  }
}
// console.log(lookup);
// '0xff5e000ca7':
//  { catId: '0xff5e000ca7',
//    tx:
//     '0x4d5472934a07e2078049e0ac539a18f442c5321b3d7a6a1f404c8dffd77d5985',
//    block: 4363303,
//    timestamp: 1507932258,
//    by: '0xa97f8ffc8f8e354475880448334e4e99a0e7212f' },

const output = [];
for (let i in moonCatDetailsByRescueOrders) {
  const e = moonCatDetailsByRescueOrders[i];
  const l = lookup[e[1]];
  // console.log(e);
  if (l) {
    output.push({ rescueIndex: i, catId: e[1], block: l.block, tx: l.tx, timestamp: l.timestamp, by: l.by })
  } else {
    console.log("Cannot find catId '" + e[1] + "' for rescueOrder: " + i);
    console.log(e);
  }
}
// console.log(output);

const OUTPUTREPORT = "moonCatData.js";
(async () => {
  await fs.writeFile(OUTPUTREPORT, "const MOONCATDATA=" + JSON.stringify(output, null, 2) + ";", (err) => {
      if (err) throw err;
      console.log('Data written to file: ' + OUTPUTREPORT);
  });
})();

// var data = JSON.parse(fs.readFileSync(".json", "utf8"));

// const INPUTDATADIR = "osraw/";
// // const OUTPUTDATAJS = "slumdoge.js";
// // const OUTPUTDATAJSON = "slumdoge.json";
// const OUTPUTREPORT = "reportOSImages.js";
//
// // console.log("Reading data from '" + INPUTDATAFILE + "' ...");
//
// let records = {};
// let accumulator = {};
// for (let i = 0; i < 10000; i += 50) {
//   // console.log(i);
//   var data = JSON.parse(fs.readFileSync(INPUTDATADIR + i + ".json", "utf8"));
//   // console.log(JSON.stringify(data, null, 2));
//   for (let assetIndex in data.assets) {
//     const asset = data.assets[assetIndex];
//     // console.log(asset.token_id + " => " + asset.image_url);
//     records[asset.token_id] = asset.image_url;
//   }
//   // const attributeCount = data.attributes.length;
//   // if (!accumulator[attributeCount]) {
//   //   accumulator[attributeCount] = [];
//   // }
//   // accumulator[attributeCount].push(data.name);
//   // records.push({ image: data.image, name: data.name, attributes: data.attributes });
// }
//
// // console.log(JSON.stringify(records, null, 2));
//
// (async () => {
//   await fs.writeFile(OUTPUTREPORT, "const SLUMDOGEIMAGEDATA=" + JSON.stringify(records, null, 2) + ";", (err) => {
//       if (err) throw err;
//       console.log('Data written to file: ' + OUTPUTREPORT);
//   });
// })();
//
// // (async () => {
// //   await fs.writeFile(OUTPUTDATAJS, "const SLUMDOGEDATA=" + JSON.stringify(records, null, 2) + ";", (err) => {
// //       if (err) throw err;
// //       console.log('Data written to file: ' + OUTPUTDATAJS);
// //   });
// // })();
// // (async () => {
// //   await fs.writeFile(OUTPUTDATAJSON, JSON.stringify(records, null, 2), (err) => {
// //       if (err) throw err;
// //       console.log('Data written to file: ' + OUTPUTDATAJSON);
// //   });
// // })();
//
//
// // const https = require('https')
// // const url = "https://slumdoge.s3.ap-southeast-2.amazonaws.com/0";
// // https.get(url, res => {
// //   let data = '';
// //   res.on('data', chunk => {
// //     data += chunk;
// //   });
// //   res.on('end', () => {
// //     data = JSON.parse(data);
// //     console.log(data);
// //   })
// // }).on('error', err => {
// //   console.log(err.message);
// // })
//
// // var config = JSON.parse(fs.readFileSync(INPUTDATAFILE, 'utf8'));
// //
// // console.log(util.inspect(config, showHidden=false, depth=3, colorize=true));
// //
// // console.log("allTokenIds: " + util.inspect(getAllTokenIds(config), showHidden=false, depth=3, colorize=true));
// // console.log("allParents: " + util.inspect(getAllParents(config), showHidden=false, depth=3, colorize=true));
// // console.log("allAttributes: " + util.inspect(getAllAttributes(config), showHidden=false, depth=3, colorize=true));
// // console.log("allAncientDNAs: " + util.inspect(getAllAncientDNAs(config), showHidden=false, depth=3, colorize=true));
// //
// // for (let tokenId in Object.keys(config.tokens)) {
// //   let token = config.tokens[tokenId];
// //   const filenamePrefix = pad64Zeroes(tokenId);
// //   const jsonFilename = OUTPUTDATADIR + filenamePrefix + ".json";
// //   console.log(jsonFilename + " " + JSON.stringify(token));
// //
// //   const data = {};
// //   const attributes = [];
// //   data.name = config.name_prefix + ' #' + pad3Zeroes(tokenId);
// //   data.description = data.name + '. ' + config.description;
// //   data.external_url = config.external_url_prefix + '#/' + tokenId;
// //   data.image = config.external_url_prefix + 'media/' + token.imageName;
// //   data.imageTransparentBG = config.external_url_prefix + 'media/' + token.imageTBName;
// //   attributes.push({ "trait_type": "Collection", "value": config.collection });
// //   attributes.push({ "trait_type": "Generation", "value": token.generation });
// //
// //   for (let parentIndex in token.parents) {
// //     let parent = token.parents[parentIndex];
// //     console.log("parent" + " " + JSON.stringify(parent));
// //     attributes.push({ "trait_type": "Parent", "value": parent.name });
// //   }
// //
// //   for (let attributeIndex in token.attributes) {
// //     let attribute = token.attributes[attributeIndex];
// //     console.log("attribute" + " " + JSON.stringify(attribute));
// //     attributes.push({ "trait_type": "Attribute", "value": attribute });
// //   }
// //
// //   for (let ancientDNAIndex in token.ancientDNA) {
// //     let ancientDNA = token.ancientDNA[ancientDNAIndex];
// //     console.log("ancientDNA" + " " + JSON.stringify(ancientDNA));
// //     attributes.push({ "trait_type": "Ancient DNA", "value": ancientDNA });
// //   }
// //
// //   data.attributes = attributes;
// //   (async () => {
// //     await fs.writeFile(jsonFilename, JSON.stringify(data, null, 2), (err) => {
// //         if (err) throw err;
// //         console.log('Data written to file: ' + jsonFilename + " " + JSON.stringify(data, null, 2));
// //     });
// //   })();
// //
// // }
// //
// // // https://ipfs.io/ipfs/Qmdmw1BZA9eF8iH4yK7v3fjqqGEWXFM4x6bu4aLc2wdamB/Baby_000_background.png
// // // {
// // //   "description": "Zombie Baby #000",
// // //   "external_url": "https://ethervendingmachine.io/nfts/0000000000000000000000000000000000000000000000000000000000000000.png",
// // //   "image": "https://ethervendingmachine.io/nfts/0000000000000000000000000000000000000000000000000000000000000000.png",
// // //   "name": "Zombie Baby #000",
// // //   "attributes": [
// // //       {
// // //         "trait_type": "Collection",
// // //         "value": "Zombie Babies"
// // //       },
// // //       {
// // //         "trait_type": "Parent 1",
// // //         "value": "Zombie #3636"
// // //       },
// // //       {
// // //         "trait_type": "Parent 2",
// // //         "value": "Zombie #4472"
// // //       },
// // //       {
// // //         "trait_type": "Attribute",
// // //         "value": "Front Beard Dark"
// // //       },
// // //       {
// // //         "trait_type": "Attribute",
// // //         "value": "Earring"
// // //       },
// // //       {
// // //         "trait_type": "Attribute",
// // //         "value": "Top Hat"
// // //       },
// // //       {
// // //         "trait_type": "Ancient DNA",
// // //         "value": "None"
// // //       },
// // //       {
// // //         "display_type": "number",
// // //         "trait_type": "Generation",
// // //         "value": 2
// // //       }
// // //     ]
// // // }
// //
// //
// //
// // function pad3Zeroes(s) {
// //   var o = s.toString();
// //   while (o.length < 3) {
// //     o = "0" + o;
// //   }
// //   return o;
// // }
// //
// // function pad64Zeroes(s) {
// //   var o = s.toString();
// //   while (o.length < 64) {
// //     o = "0" + o;
// //   }
// //   return o;
// // }
// //
// // function getAllTokenIds(config) {
// //   return Object.keys(config.tokens);
// // }
// //
// // function getAllParents(config) {
// //   let allParents = {};
// //   for (let tokenId in Object.keys(config.tokens)) {
// //     let token = config.tokens[tokenId];
// //     for (let parentIndex in token.parents) {
// //       let parent = token.parents[parentIndex];
// //       if (allParents[parent] === undefined) {
// //         allParents[parent] = 1;
// //       }
// //     }
// //   }
// //   return Object.keys(allParents);
// // }
// //
// // function getAllAttributes(config) {
// //   let allAttributes = {};
// //   for (let tokenId in Object.keys(config.tokens)) {
// //     let token = config.tokens[tokenId];
// //     for (let attributeIndex in token.attributes) {
// //       let attribute = token.attributes[attributeIndex];
// //       if (allAttributes[attribute] === undefined) {
// //         allAttributes[attribute] = 1;
// //       }
// //     }
// //   }
// //   return Object.keys(allAttributes);
// // }
// //
// // function getAllAncientDNAs(config) {
// //   let allAncientDNAs = {};
// //   for (let tokenId in Object.keys(config.tokens)) {
// //     let token = config.tokens[tokenId];
// //     for (let ancientDNAIndex in token.ancientDNA) {
// //       let ancientDNA = token.ancientDNA[ancientDNAIndex];
// //       if (allAncientDNAs[ancientDNA] === undefined) {
// //         allAncientDNAs[ancientDNA] = 1;
// //       }
// //     }
// //   }
// //   return Object.keys(allAncientDNAs);
// // }
// //
// // // Simple Addition Function in Javascript
// // function add(a, b) {
// //   return a+b
// // }
// // console.log(add(4, 6))
//
console.log(process.cwd());
