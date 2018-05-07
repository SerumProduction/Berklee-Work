# Heart and Soul
tempo = 0.35

use_synth :piano
with_fx :reverb do
  in_thread do
    loop do
      play :c5
      sleep tempo * 1.5
      play :c5
      sleep tempo * 1.5
      play :c5
      sleep tempo * 4
      play :c5
      sleep tempo * 0.5
      play :b4
      sleep tempo
      play :a4
      sleep tempo * 0.5
      play :b4
      sleep tempo
      play :c5
      sleep tempo * 0.5
      play :d5
      sleep tempo * 1.5
      play :e5
      sleep tempo * 1.5
      play :e5
      sleep tempo * 1.5
      play :e5
      sleep tempo * 4
      play :e5
      sleep tempo * 0.5
      play :d5
      sleep tempo
      play :c5
      sleep tempo * 0.5
      play :d5
      sleep tempo
      play :e5
      sleep tempo * 0.5
      play :f5
      sleep tempo * 1.5
      play :g5
      sleep tempo * 3
      play :c5
      sleep tempo * 4
      play :a5
      sleep tempo * 0.5
      play :g5
      sleep tempo
      play :f5
      sleep tempo * 0.5
      play :e5
      sleep tempo * 1.5
      play :d5
      sleep tempo * 1.5
      play :c5
      sleep tempo * 4
      play :d5
      sleep tempo * 0.5
      play :e5
      sleep tempo
      play :f5
      sleep tempo * 0.5
      play :g5
      sleep tempo * 2
      play :f5
      sleep tempo * 0.5
      play :e5
      sleep tempo * 0.5
      play :d5
      sleep tempo * 3
    end
  end
  in_thread do
    loop do
      play :c3
      sleep tempo
      play :c3
      sleep tempo * 0.5
      play chord(:c3, :M)
      sleep tempo
      play chord(:c3, :M)
      sleep tempo * 0.5
      play :a2
      sleep tempo
      play :a2
      sleep tempo * 0.5
      play chord(:a2, :m)
      sleep tempo
      play chord(:a2, :m)
      sleep tempo * 0.5
      play :f2
      sleep tempo
      play :f2
      sleep tempo * 0.5
      play chord(:f2, :M)
      sleep tempo
      play chord(:f2, :M)
      sleep tempo * 0.5
      play :g2
      sleep tempo
      play :g2
      sleep tempo * 0.5
      play chord(:g2, :M)
      sleep tempo
      play chord(:g2, :M)
      sleep tempo * 0.5
    end
  end
end