const Record = require("../models/Record");

exports.getSummary = async (req, res) => {
  try {
    const records = await Record.find();

    let income = 0;
    let expense = 0;

    records.forEach(r => {
      if (r.type === "income") income += r.amount;
      else expense += r.amount;
    });

    res.json({
      totalIncome: income,
      totalExpense: expense,
      netBalance: income - expense
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getTrends = async (req, res) => {
  try {
    const trends = await Record.aggregate([
      {
        $group: {
          _id: { $month: "$date" },
          total: { $sum: "$amount" }
        }
      },
      { $sort: { "_id": 1 } }
    ]);

    res.json(trends);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};