const express = require('express');
const router = express.Router();

const postModel = require("../model/post");

// 게시물 조회
router.get('/', async(req, res) => {
    try {
        const result = await postModel.find();
        res.status(200).json({
            message: "read success",
            data: result,
        });
    } catch(error) {
        res.status(500).json({
            message: error,
        });
    }
});

// 게시물 번호로 조회
router.get('/:id', async(req, res) => {
    try {
        const result = await postModel.findById(req.params.id);
        res.status(200).json({
            message: "read by id success",
            data: result,
        });
    } catch(error) {
        res.status(500).json({
            message: error,
        });
    }
});

router.post('/', async(req, res) => {
    try {
        // 응답을 하는 시점은 동기적이어야한다.
        const result = await postModel.save(req.body);
        res.status(200).json({
            message: "upload success",
            data: result,
        });
    } catch(error) {
        res.status(500).json({
            message: error,
        });
    }
});

router.put('/:id', async(req, res) => {
    try {
        const result = await postModel.update(req.body, req.params.id);
        res.status(200).json({
            message: "update success",
            data: result,
        });
    } catch(error) {
        res.status(500).json({
            message: error,
        });
    }
});

router.delete('/:id', async(req, res) => {
    try {
        const result = await postModel.delete(req.params.id);
        res.status(200).json({
            message: "delete success",
            data: result,
        });
    } catch(error) {
        res.status(500).json({
            message: error,
        });
    }
});

module.exports = router;