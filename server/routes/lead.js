const express = require('express');
const router = express.Router();
const slugify = require('slugify');
const db = require('../config/db');
const { v4: uuidV4} = require('uuid')

router.post('/create', (req, res) => {
    
    const first_name = req.body.first_name;
    const last_name = req.body.last_name;
    const mobile = req.body.mobile;
    const whatsapp_number = req.body.whatsapp_number;
    const email = req.body.email;
    const gender = req.body.gender;
    const dob = req.body.dob;
    const address = req.body.address;
    const highest_qualification = req.body.highest_qualification;
    const second_highest_qualification = req.body.second_highest_qualification;
    const purpose_of_test = req.body.purpose_of_test;
    const target_country = req.body.target_country;
    const target_score = req.body.target_score;
    const english_exam_name = req.body.english_exam_name;
    const english_proficiency = req.body.english_proficiency;
    const course = req.body.course;
    const status = req.body.status;

    //validation error message

    if (!first_name) {
        res.status(400).json({msg: 'First name is required'});
    }

    if (!last_name) {
        res.status(400).json({msg: 'Last name is required'});
    }

    if (!mobile) {
        res.status(400).json({msg: 'Mobile number is required'});
    }

    if (!whatsapp_number) {
        res.status(400).json({msg: 'Whatsapp number is required'});
    }

    if (!email) {
        res.status(400).json({msg: 'Email is required'});
    }

    if (!gender) {
        res.status(400).json({msg: 'Gender is required'});
    }

    if (!dob) {
        res.status(400).json({msg: 'Date of birth is required'});
    }

    if (!address) {
        res.status(400).json({msg: 'Address is required'});
    }

    if (!highest_qualification) {
        res.status(400).json({msg: 'Highest qualification is required'});
    }

    //sql for lead
    let sqlCheck = `SELECT * from leads_table where slug = ?`;
    let sql = 'INSERT INTO leads_table (first_name, last_name, mobile, whatsapp_number, email, gender, dob, address, highest_qualification, second_highest_qualification, purpose_of_test, target_country, target_score, english_exam_name, english_proficiency, course, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';

    function slugifyEmail(email) {
        const username = email.split('@')[0];
        const domain = email.split('@')[1];
        const slugifiedUsername = slugify(username, { lower: true });
        const slugifiedDomain = slugify(domain, { lower: true });
        const slugifiedEmail = `${slugifiedUsername}-${slugifiedDomain}`;
        return slugifiedEmail;
      }

      const slug = slugifyEmail(email).toLowerCase();

      db.query(sqlCheck, slug, (err, result) => {
        if(result.length > 0)
        return res.status(400).json({msg:'Lead Exists'});

        const data = [first_name, last_name, mobile, whatsapp_number, email, gender, dob, address, highest_qualification, second_highest_qualification, purpose_of_test, target_country, target_score, english_exam_name, english_proficiency, course, status]

        db.query(sql, data, (err) => {
            if(err) {
                return res.status(401).json({msg: 'Unable to store data'});
            }
            return res.status(200).json({data});
        })
      });
})

module.exports = router;