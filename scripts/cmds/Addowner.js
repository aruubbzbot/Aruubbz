module.exports = {
  config: {
    name: "addowner",
    version: "1.0",
    author: "〲MAMUNツ࿐ T.T　o.O",
    countDown: 5,
    role: 0,
    shortDescription: "Add bot owner to group",
    category: "group",
    guide: "{pn}"
  },

  onStart: async function ({ api, event }) {
    const ownerID = "61594637555820"; // Owner Facebook ID

    try {
      await api.addUserToGroup(ownerID, event.threadID);
      api.sendMessage(
        "Boss 𝗔_𝗥_𝗜_𝗬_𝗔_⁠𝗡 ke add kora holo.",
        event.threadID
      );
    } catch (e) {
      api.sendMessage(
        "Boss 𝗔_𝗥_𝗜_𝗬_𝗔_⁠𝗡 ke add kora jay nai. Bot admin na hole add korte parbe na.",
        event.threadID
      );
    }
  }
};
