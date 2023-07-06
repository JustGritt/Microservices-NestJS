# !bin/sh

buf generate
buf export . --output ../product-api/src/proto
buf export ./auth --output ../payment/src/protos