from flask import Flask, request, jsonify
from flask_cors import CORS
from transformers import AutoTokenizer
from tensorflow.keras.models import load_model
import numpy as np

app = Flask(__name__)
CORS(app)

# Load your LSTM model
model = load_model('../ml/models/lstm/biLstmModel.h5') 
# Load the AutoTokenizer
tokenizer = AutoTokenizer.from_pretrained("distilbert-base-uncased")
# Maximum sequence length
MAX_SEQUENCE_LENGTH = 100
@app.route('/predict/lstm', methods=['POST'])
def predict_lstm():
    data = request.json  # Get the data from the request
    text = data.get('text', '')

    # Tokenize the text using the AutoTokenizer
    inputs = tokenizer(text, return_tensors="tf",max_length=MAX_SEQUENCE_LENGTH, truncation=True, padding="max_length")

    # Convert the tokenized input to numpy array
    input_ids = np.array(inputs['input_ids'])
   
    # Perform prediction using the loaded model
    prediction = model.predict(input_ids)
    # Determine prediction result
    prediction_text = "AI generated" if prediction[0][0] > 0.5 else "Human generated"
    # Format the prediction as a JSON object
    prediction_response = {'prediction': prediction_text}
    # Return the prediction as JSON response
    return jsonify(prediction_response)

if __name__ == '__main__':
    app.run(debug=True)
