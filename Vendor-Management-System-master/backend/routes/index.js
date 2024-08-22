const express = require("express");
const vendorRouter = require("./vendor");
const purchaseOrderRouter = require("./purchaseOrder");
const router = express.Router();

router.use("/vendors", vendorRouter);
router.use("/purchase_order", purchaseOrderRouter);

module.exports = router;
