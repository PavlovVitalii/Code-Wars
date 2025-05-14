// Build Tower by the following given arguments:

// number of floors (integer and always greater than 0)
// block size (width, height) (integer pair and always greater than (0, 0))

function towerBuilder(nFloors, nBlockSz) {
  let [startWidthBlok, blockHeight] = nBlockSz;
  let widthTower = startWidthBlok;
  let widthBlok = null;
  let tower = [];

  for (let index = 1; index < nFloors; index++) {
    widthTower = widthTower + startWidthBlok * 2;
  }

  widthBlok = widthTower;

  for (let index = 0; index < nFloors; index++) {
    for (let j = 0; j < blockHeight; j++) {
      tower.unshift(
        " ".repeat((widthTower - widthBlok) / 2) +
          "*".repeat(widthBlok) +
          " ".repeat((widthTower - widthBlok) / 2)
      );
    }

    widthBlok = widthBlok - startWidthBlok * 2;
  }

  return tower;
}


