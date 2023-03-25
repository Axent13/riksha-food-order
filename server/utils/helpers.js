function generateUserImage(name) {
  return {
    image: `https://eu.ui-avatars.com/api/?name=${name}`,
  };
}

module.exports = {
  generateUserImage,
};
