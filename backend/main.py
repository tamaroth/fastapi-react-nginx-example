from fastapi import FastAPI

app = FastAPI()


@app.get("/api/data")
async def root():
    return {"message": "Hello World"}