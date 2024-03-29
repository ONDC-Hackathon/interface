import React from 'react'
import { Button, Typography } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import {
  evaluateScore,
  checkScore,
  getProduct,
} from '../Redux/services/product.service'
import ProductScores from './ProductScores'
import { useNavigate } from 'react-router-dom'

function Review({ steps, activeStep, setActiveStep, handleNext }) {
  const { product } = useSelector((state) => state.product)
  const [logs, setLogs] = useState(null)
  const [catalogueScore, setCatalogueScore] = useState(null)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleEvaluate = async (e) => {
    e.preventDefault()
    const res = await dispatch(evaluateScore(product.id))
    console.log(res)
    await dispatch(getProduct({ id: product.id }))
  }

  const handleCheck = async (e) => {
    e.preventDefault()
    const res = await dispatch(checkScore(product.id))
    if (res.payload?.data?.data?.logs) {
      setLogs(res.payload.data.data.logs)
    } else {
      setCatalogueScore(res.payload?.data?.data)
    }
    console.log('logs: ', logs, 'score: ', catalogueScore)
  }

  const handlePublish = async (e) => {
    e.preventDefault()
    navigate(`/product/${product.id}`)
    // const res = await dispatch(checkScore(product.id))
    // if (res.payload?.data?.data?.logs) {
    //   setLogs(res.payload.data.data.logs)
    // } else {
    //   setCatalogueScore(res.payload?.data?.data)
    // }
    // console.log('logs: ', logs, 'score: ', catalogueScore)
  }

  return (
    <>
      {Object.keys(product).length !== 0 && (
        <div>
          <div>
            {product.scoring_status === 'Uninitialized'
              ? 'Your product is under review'
              : catalogueScore
                ? ''
                : 'Click check score to get logs'}
          </div>
          <div className="flex justify-center space-x-4">
            {product.scoring_status === 'Uninitialized' ? (
              <Button
                variant="contained"
                sx={{
                  borderRadius: '15px',
                  fontWeight: '900',
                  borderWidth: '2px',
                }}
                color="success"
                onClick={handleEvaluate}
              >
                Evaluate Score
              </Button>
            ) : catalogueScore ? (
              <Button
                variant="contained"
                color="success"
                sx={{
                  color: 'white !important',
                  borderRadius: '15px',
                  fontWeight: '900',
                }}
                onClick={handlePublish}
              >
                Publish
              </Button>
            ) : (
              <Button
                variant="contained"
                color="success"
                sx={{
                  color: 'white !important',
                  borderRadius: '15px',
                  fontWeight: '900',
                }}
                onClick={handleCheck}
              >
                Check Score
              </Button>
            )}
          </div>
          {logs && (
            <div className="flex justify-center space-x-4">
              {logs?.map((log, index) => (
                <Typography key={index}>{log.description}</Typography>
              ))}
            </div>
          )}
          {catalogueScore && <ProductScores product={catalogueScore} />}
        </div>
      )}
    </>
  )
}

export default Review
