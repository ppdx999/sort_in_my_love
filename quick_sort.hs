import System.Environment (getArgs)

qsort :: (Ord a) => [a] -> [a]  
qsort []     = []  
qsort (x:xs) = (qsort left) ++ [x] ++ (qsort right)  
               where left  = filter (<x)  xs  
                     right = filter (>=x) xs

main :: IO()
main = do
    args <- getArgs 
    putStrLn $ qsort args >>= (' ' :) . id