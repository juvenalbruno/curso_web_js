const fs = require('fs')
const { resolve } = require('path')
const { rejects } = require('assert')

module.exports = paths => {
    return new Promise((resolve, rejects) => {
        try {
            const rows = paths
                .map(path => fs.readFileSync(path).toString('utf-8'))
                .reduce((fullText, fileText) => `${fullText}\n${fileText}`)
                .split('\n')
            resolve(rows)
        }catch(e) {
            rejects(e)
        }
    })
}