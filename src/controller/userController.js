const api = require("../api");

module.exports = {
  async getAllUsers(req, res) {
    try {
      const since = req.query?.since;

      if (!since)
        return res
          .status(401)
          .json({ message: "Since query param is required" });

      const { data } = await api.request(`GET /users{?since}`, { since });
      res.status(200).json({ users: data });
    } catch (error) {
      res.status(400).json({ error });
    }
  },
  async getUserDetails(req, res) {
    try {
      const username = req.params.username;

      const { data } = await api.request("GET /users/{username}", {
        username,
      });

      res.status(200).json({ user: data });
    } catch (error) {
      res.status(400).json({ error });
    }
  },
  async getUserRepos(req, res) {
    try {
      const username = req.params.username;

      const { data } = await api.request("GET /users/{username}/repos", {
        username,
      });

      res.status(200).json({ userDetails: data });
    } catch (error) {
      res.status(400).json({ error });
    }
  },
};
