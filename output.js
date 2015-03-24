// Generated by CoffeeScript 1.9.1
(function() {
  var fd, fs, tree;

  fd = require('path');

  fs = require('fs');

  tree = {
    "1": {
      id: 1,
      name: "大陆",
      type: "code",
      provinces: {}
    },
    "2": {
      id: 2,
      name: "港澳台",
      type: "code",
      countrys: {}
    },
    "3": {
      id: 3,
      name: "海外",
      type: "code",
      countrys: {}
    }
  };

  fs.readFile('./ip库.txt', 'utf8', function(err, data) {
    var c, p, ref;
    if (err) {
      throw err;
    }
    data = data.split('\n');
    data.forEach(function(d) {
      var temp, treeTemp;
      if (!d) {
        return true;
      }
      d = d.split('\t');
      d = {
        "province_name": d["2"],
        "city_name": d["3"],
        "Operator": d["4"],
        "Zip": d["6"],
        "Region": d["7"],
        "country_addr": d["8"],
        "large_region_code": d["9"],
        "city_level": d["10"],
        "province_code": d["11"],
        "country_ename": d["12"].replace(/"/g, ''),
        "country_name": d["13"]
      };
      if (+d.large_region_code) {
        treeTemp = tree[d.large_region_code];
        if (d.large_region_code === '1') {
          if (d.city_level === 'unknown') {
            treeTemp.provinces[d.province_name] = {
              "name": d.province_name,
              "id": d.province_code,
              "levels": treeTemp.provinces[d.province_name] ? treeTemp.provinces[d.province_name].levels : {},
              "type": "province"
            };
            return true;
          }
          if (!(temp = treeTemp.provinces[d.province_name])) {
            temp = treeTemp.provinces[d.province_name] = {
              "id": d.province_code,
              "levels": {},
              "type": "province"
            };
          }
          if (!(temp = temp.levels[d.city_level])) {
            temp = treeTemp.provinces[d.province_name]['levels'][d.city_level] = {
              "id": d.city_level,
              "name": ['', '一', '二', '三', '四', '五'][d.city_level] + "线",
              "type": "level",
              "citys": {}
            };
          }
          temp.citys[d.city_name] = {
            "name": d.city_name
          };
        }
        if (d.large_region_code === '2') {
          treeTemp.countrys[d.country_addr] = {
            "addr": d.country_addr,
            "ename": d.country_ename,
            "name": d.country_name,
            "type": "country"
          };
        }
        if (d.large_region_code === '3') {
          if (d.country_ename !== 'unknown') {
            return treeTemp.countrys[d.country_addr] = {
              "addr": d.country_addr,
              "ename": d.country_ename,
              "name": d.country_name === 'unknown' ? '' : d.country_name,
              "type": "country"
            };
          }
        }
      }
    });
    ref = tree[1].provinces;
    for (c in ref) {
      p = ref[c];
      if (!p.name) {
        p.name = Object.keys(p.levels[1].citys)[0];
      }
    }
    console.log('Data processing is completed!');
    return fs.writeFile('./citys.js', JSON.stringify(tree), function(err) {
      if (err) {
        throw err;
      }
      return console.log("citys.js is created!");
    });
  });

}).call(this);
