
const muridService = require("../services/muridService")
exports.GetLastPendidikanMurid = async (req,res) => {
    const pendidikan = await muridService.GetLastPendidikanMurid()
    res.status(200).json({
        message: "success",
        data: pendidikan
    })
}