# MoonCat Explainer

See https://bokkypoobah.github.io/MoonCatExplainer/

Some data from https://github.com/bokkypoobah/MoonCatListing

<br />

## Scraped "Static" Data

The script [scripts/01_getMoonCatRescueData.sh](scripts/01_getMoonCatRescueData.sh) retrieves the following data from the blockchain:

### Get Cat Details By rescueIndex

Using the following algorithm:

```
Iterate from 0 to rescueIndex (25440)
  var catId = moonCat.rescueOrder(i);
  var catDetails = moonCat.getCatDetails(catId);
```

To produce:

```
moonCatDetailsByRescueOrders = [
[0, "0x00d658d50b", "0xc3f733ca98e0dad0386979eb96fb1722a1a05e69", "0x0000000000000000000000000000000000000000000000000000000000000000", "0x0000000000000000000000000000000000000000", "0.000000000000000000", "0x54fcf70e08d50bef7d8450a67e2e13a64fc5ca16", "0.020000000000000000"],
[1, "0x000f53c2fd", "0xc3f733ca98e0dad0386979eb96fb1722a1a05e69", "0x0000000000000000000000000000000000000000000000000000000000000000", "0x0000000000000000000000000000000000000000", "0.000000000000000000", "0x4d333aedccdf782a86b9c1b2b80fa656125dbc1b", "11.000000000000000000"],
[2, "0x0027518528", "0x2621ea417659ad69bae66af05ebe5788e533e5e7", "0x0000000000000000000000000000000000000000000000000000000000000000", "0x0000000000000000000000000000000000000000", "1337.000000000000000000", "0xa0c87ae80095ee705e05e38ec1c77daa12f91ceb", "1.500000000000000000"],
[3, "0x00aeea3b67", "0x2621ea417659ad69bae66af05ebe5788e533e5e7", "0x0000000000000000000000000000000000000000000000000000000000000000", "0x0000000000000000000000000000000000000000", "512.000000000000000000", "0x6e8f6582f24bd995026dd9c97149963cd305b12e", "0.110100000000000000"],
[4, "0x00ff7b7493", "0x2621ea417659ad69bae66af05ebe5788e533e5e7", "0x0000000000000000000000000000000000000000000000000000000000000000", "0x0000000000000000000000000000000000000000", "256.000000000000000000", "0x892857d3a0e6ca504da54470a0d71593525ebc22", "0.100000000000000000"],
...
```

<br />

### Retrieve all CatRescued events

```
moonCatRescueEvents = [
[0, 4140409, 74, "0xd31d05adb302131f0c31f1a001685f29eb3b2b66d2af3b90d1e2c7f22661db61", "0xedccc2ce220f286bf218390ad16e432d539e6890", "0x00d658d50b", 1502370691],
[1, 4140423, 193, "0xf2bf93323fee385d8737675092452ce9994ff6c2843decc671bf3d0f94c65e0c", "0x4be972e5799b243180b2fc76468a1c8503281449", "0x000f53c2fd", 1502370981],
[2, 4140505, 19, "0x9c0f6f619a6f2ac355cc71cb51e636906de805e08400f84227bdce188c5dad1e", "0x2621ea417659ad69bae66af05ebe5788e533e5e7", "0x0027518528", 1502372495],
[3, 4140511, 132, "0xa55874b0c13d976d71b21270a1059d665cb971cbac8f4cebcafa11b62db2b292", "0x2621ea417659ad69bae66af05ebe5788e533e5e7", "0x00aeea3b67", 1502372782],
[4, 4140512, 20, "0x4c9b21fc342128a457cebf5a050841bd19f135ab522ae2ab92282027d7d3e080", "0x2621ea417659ad69bae66af05ebe5788e533e5e7", "0x00ff7b7493", 1502372784],
...
```

<br />

### Retrieve all GenesisCatsAdded events

```
moonCatGenesisCatsAddedEvents = [
[0, 4140755, 41, "0xe581cc51814d91c690d9ab5306ce29d4969cf82d9885dc53c8ea6135995e845b", ["0xff00000ca7","0xff01000ca7","0xff02000ca7","0xff03000ca7","0xff04000ca7","0xff05000ca7","0xff06000ca7","0xff07000ca7","0xff08000ca7","0xff09000ca7","0xff0a000ca7","0xff0b000ca7","0xff0c000ca7","0xff0d000ca7","0xff0e000ca7","0xff0f000ca7"], 1502377959],
[1, 4142404, 39, "0xbd0e3f7a90b47f64e9c7e4c0fe72d1118eef65bb68238ea2c79e363d69ed39a2", ["0xff10000ca7","0xff11000ca7","0xff12000ca7","0xff13000ca7","0xff14000ca7","0xff15000ca7","0xff16000ca7","0xff17000ca7","0xff18000ca7","0xff19000ca7","0xff1a000ca7","0xff1b000ca7","0xff1c000ca7","0xff1d000ca7","0xff1e000ca7","0xff1f000ca7"], 1502413226],
[2, 4149922, 29, "0x26d0342b2b9ad5e10d02f26bdfce070bb7ced8b2761e4da4b31defc1783c4fc6", ["0xff20000ca7","0xff21000ca7","0xff22000ca7","0xff23000ca7","0xff24000ca7","0xff25000ca7","0xff26000ca7","0xff27000ca7","0xff28000ca7","0xff29000ca7","0xff2a000ca7","0xff2b000ca7","0xff2c000ca7","0xff2d000ca7","0xff2e000ca7","0xff2f000ca7"], 1502570713],
[3, 4173595, 105, "0x4187a11ffbc80727d9c19aadbe418a77b41ca20a76e056bbfd107b75dbf56350", ["0xff30000ca7","0xff31000ca7","0xff32000ca7","0xff33000ca7","0xff34000ca7","0xff35000ca7","0xff36000ca7","0xff37000ca7","0xff38000ca7","0xff39000ca7","0xff3a000ca7","0xff3b000ca7","0xff3c000ca7","0xff3d000ca7","0xff3e000ca7","0xff3f000ca7"], 1503065383],
[4, 4217155, 51, "0xcc796731ae168bb82dc052fd0353640f5091c0b2c161723da663725968fafe39", ["0xff40000ca7","0xff41000ca7","0xff42000ca7","0xff43000ca7","0xff44000ca7","0xff45000ca7","0xff46000ca7","0xff47000ca7","0xff48000ca7","0xff49000ca7","0xff4a000ca7","0xff4b000ca7","0xff4c000ca7","0xff4d000ca7","0xff4e000ca7","0xff4f000ca7"], 1504029565],
[5, 4363303, 54, "0x4d5472934a07e2078049e0ac539a18f442c5321b3d7a6a1f404c8dffd77d5985", ["0xff50000ca7","0xff51000ca7","0xff52000ca7","0xff53000ca7","0xff54000ca7","0xff55000ca7","0xff56000ca7","0xff57000ca7","0xff58000ca7","0xff59000ca7","0xff5a000ca7","0xff5b000ca7","0xff5c000ca7","0xff5d000ca7","0xff5e000ca7","0xff5f000ca7"], 1507932258],
];
```

<br />

### Retrieve Data From api.mooncat.community

The [scripts/02_getIndividualJSONs.sh](scripts/02_getIndividualJSONs.sh) retrieves MoonCat trait data from the api.mooncat.community server.

Following is the data from `wget https://api.mooncat.community/traits/1 -O raw/1.json`

```
{
    "attributes": [
        {
            "trait_type": "MoonCat Id",
            "value": "0x000f53c2fd"
        },
        {
            "max_value": 25439,
            "trait_type": "Rescue Index",
            "value": 1
        },
        {
            "trait_type": "Classification",
            "value": "Rescue"
        },
        {
            "trait_type": "Rescue Year",
            "value": "2017"
        },
        {
            "trait_type": "Coat",
            "value": "Sky Blue Tortie"
        },
        {
            "trait_type": "Expression",
            "value": "Smiling"
        },
        {
            "trait_type": "Pose",
            "value": "Stalking"
        },
        {
            "trait_type": "Only Child?",
            "value": "No"
        },
        {
            "trait_type": "Has Twins?",
            "value": "Yes"
        },
        {
            "trait_type": "Has Mirrors?",
            "value": "No"
        },
        {
            "trait_type": "Has Clones?",
            "value": "No"
        }
    ],
    "background_color": "000000",
    "description": "Sky Blue Smiling Tortie MoonCat",
    "details": {
        "catId": "0x000f53c2fd",
        "classification": "rescue",
        "cloneId": "0021330043660096e666caff99ffdecc",
        "cloneSet": [
            1
        ],
        "cloneSetSize": 1,
        "contract": {
            "address": "0xc3f733ca98e0dad0386979eb96fb1722a1a05e69",
            "capabilities": [
                "ERC20",
                "ERC721",
                "ERC998"
            ],
            "description": "MoonCatAcclimator",
            "tokenId": 1
        },
        "expression": "smiling",
        "facing": "left",
        "glow": [
            83,
            194,
            253
        ],
        "hasClones": false,
        "hasMirrors": false,
        "hasTwins": true,
        "hue": "skyBlue",
        "hueValue": 200,
        "isAcclimated": true,
        "isPale": false,
        "litter": [
            1,
            2002,
            9768,
            22432,
            23846,
            25034
        ],
        "litterId": "0021330043660096e666caff99ffdec0",
        "litterSize": 6,
        "mirrorId": "0021330043660096e666caff99ffdecc",
        "mirrorSet": [
            1
        ],
        "mirrorSetSize": 1,
        "name": null,
        "onlyChild": false,
        "owner": "0x4be972e5799b243180b2fc76468a1c8503281449",
        "pattern": "tortie",
        "pose": "stalking",
        "rescueIndex": 1,
        "rescueYear": 2017,
        "rescuedBy": "0x4be972e5799b243180b2fc76468a1c8503281449",
        "twinId": "0021330043660096e666caff99ffdec0",
        "twinSet": [
            1,
            23846
        ],
        "twinSetSize": 2
    },
    "image": "https://api.mooncat.community/glow-image/0x000f53c2fd",
    "name": "1: 0x000f53c2fd"
}
```

<br />

### Collate Data By rescueIndex

The [scripts/03_generateReport.js](scripts/03_generateReport.js) collates the above information to produce [scripts/moonCatData.js](scripts/moonCatData.js) and [scripts/moonCatData.min.js](scripts/moonCatData.min.js), with a copy used for the web3 UI at [docs/moonCatData.min.js](docs/moonCatData.min.js):

```
const MOONCATDATA=[
  {
    "rescueIndex": "0",
    "catId": "0x00d658d50b",
    "rescued": {
      "block": 4140409,
      "tx": "0xd31d05adb302131f0c31f1a001685f29eb3b2b66d2af3b90d1e2c7f22661db61",
      "timestamp": 1502370691,
      "by": "0xedccc2ce220f286bf218390ad16e432d539e6890"
    },
    "name": "0: 0x00d658d50b",
    "description": "Pale Chartreuse/Yellow Grumpy Tabby MoonCat",
    "image": "https://api.mooncat.community/glow-image/0x00d658d50b",
    "attributes": [
      {
        "trait_type": "MoonCat Id",
        "value": "0x00d658d50b"
      },
      {
        "trait_type": "Rescue Index",
        "value": 0,
        "max_value": 25439
      },
      {
        "trait_type": "Classification",
        "value": "Rescue"
      },
      {
        "trait_type": "Rescue Year",
        "value": "2017"
      },
      {
        "trait_type": "Coat",
        "value": "Pale Chartreuse Tabby"
      },
      {
        "trait_type": "Expression",
        "value": "Grumpy"
      },
      {
        "trait_type": "Pose",
        "value": "Pouncing"
      },
      {
        "trait_type": "Only Child?",
        "value": "No"
      },
      {
        "trait_type": "Has Twins?",
        "value": "Yes"
      },
      {
        "trait_type": "Has Mirrors?",
        "value": "No"
      },
      {
        "trait_type": "Has Clones?",
        "value": "No"
      }
    ],
    "details": {
      "hue": "chartreuse",
      "onlyChild": false,
      "isPale": true,
      "litterId": "133300a0ff66fffa9927660057e60040",
      "catId": "0x00d658d50b",
      "expression": "grumpy",
      "cloneSet": [
        0
      ],
      "name": null,
      "contract": {
        "tokenId": 0,
        "description": "MoonCatAcclimator",
        "address": "0xc3f733ca98e0dad0386979eb96fb1722a1a05e69",
        "capabilities": [
          "ERC20",
          "ERC721",
          "ERC998"
        ]
      },
      "facing": "right",
      "hasTwins": true,
      "litter": [
        0,
        10477,
        20810
      ],
      "twinId": "133300a0ff66fffa9927660057e60050",
      "classification": "rescue",
      "hasClones": false,
      "twinSetSize": 2,
      "litterSize": 3,
      "mirrorSetSize": 1,
      "isAcclimated": true,
      "pose": "pouncing",
      "rescueIndex": 0,
      "rescuedBy": "0xedccc2ce220f286bf218390ad16e432d539e6890",
      "cloneId": "133300a0ff66fffa9927660057e60059",
      "twinSet": [
        0,
        10477
      ],
      "rescueYear": 2017,
      "mirrorId": "133300a0ff66fffa9927660057e60058",
      "glow": [
        88,
        213,
        11
      ],
      "owner": "0xedccc2ce220f286bf218390ad16e432d539e6890",
      "mirrorSet": [
        0
      ],
      "hasMirrors": false,
      "cloneSetSize": 1,
      "pattern": "tabby",
      "hueValue": 97
    }
  },
  ...
```

You may find this data useful for your MoonCat projects.

<br />

<br />

Enjoy!

(c) BokkyPooBah / Bok Consulting Pty Ltd - Jun 29 2019. The MIT Licence.
