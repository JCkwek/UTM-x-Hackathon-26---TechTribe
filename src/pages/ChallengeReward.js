import React, { useState, useEffect } from 'react';
import styles from './ChallengeReward.module.css';

export default function ChallengeReward() {
  // Core State
  const [balance, setBalance] = useState(1500.00); 
  const [pocketBalance, setPocketBalance] = useState(250.00); 
  const [resilienceScore, setResilienceScore] = useState(0);
  const [logs, setLogs] = useState([
    { time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }), message: 'System initialized. AI transaction monitoring active.', type: 'neutral' }
  ]);
  
  const [isSimulatorOpen, setIsSimulatorOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('active');

  // Interest Engine
  const [avatarState, setAvatarState] = useState('warning');
  const [currentSpeech, setCurrentSpeech] = useState("Danger Zone! ⚠️");
  const [isPoked, setIsPoked] = useState(false);

  const baseRate = 3.00;
  let currentBonusRate = 0.00;

  if (resilienceScore === 100) currentBonusRate = 0.20; 
  else if (resilienceScore >= 75) currentBonusRate = 0.15; 
  else if (resilienceScore >= 50) currentBonusRate = 0.10; 
  else if (resilienceScore >= 25) currentBonusRate = 0.05; 
  else currentBonusRate = 0.00; 

  const totalRate = baseRate + currentBonusRate;

  // Pet Dialogue Library
  const petDialogues = {
    max: ["Max Resilient! ✨", "I feel unstoppable! 💸", "We are on fire! 🔥", "Interest rate maximized! 🚀"],
    happy: ["Doing great! 📈", "Keep saving! 💰", "I love this! 🥰", "Almost at the top!"],
    neutral: ["Steady saver. ☕", "Just chilling. 😌", "Slow and steady.", "Any round-ups today?"],
    calm: ["Just starting out. 🌱", "Let's build good habits.", "Need more points...", "A bit sleepy... 🥱"],
    warning: ["Danger Zone! ⚠️", "Watch the budget! 📉", "I'm stressed! 💧", "No more online shopping!"]
  };

  // Update Pet State based on Score
  useEffect(() => {
    let newState = 'warning';
    if (resilienceScore === 100) newState = 'max';
    else if (resilienceScore >= 75) newState = 'happy';
    else if (resilienceScore >= 50) newState = 'neutral';
    else if (resilienceScore >= 25) newState = 'calm';
    
    setAvatarState(newState);
    setCurrentSpeech(petDialogues[newState][0]); // Set default speech for new state
  }, [resilienceScore]);

  // Handle Pet Click (Poke Interaction)
  const handlePetClick = () => {
    if (isPoked) return; 
    
    setIsPoked(true);
    setTimeout(() => setIsPoked(false), 400); 

    const availableDialogues = petDialogues[avatarState].filter(text => text !== currentSpeech);
    const randomText = availableDialogues[Math.floor(Math.random() * availableDialogues.length)];
    setCurrentSpeech(randomText);
  };

  // Monthly Quests
  const [challenges, setChallenges] = useState([
    { id: 'r1', title: 'Monthly Micro-Saver', description: 'Complete 30 automated round-ups this month.', difficulty: 'easy', type: 'reward', reward: 15, penalty: 0, icon: '🪙', progress: 29, maxProgress: 30, completed: false, isFailed: false, active: true },
    { id: 'r2', title: '30-Day Pocket Fund', description: 'Transfer RM 500 into your Savings Pocket this month.', difficulty: 'hard', type: 'reward', reward: 50, penalty: 0, icon: '🎯', progress: 400, maxProgress: 500, completed: false, isFailed: false, active: true },
    { id: 'r3', title: 'Essential Spender', description: 'Make 10 grocery transactions using your GX Card this month.', difficulty: 'medium', type: 'reward', reward: 25, penalty: 0, icon: '🛒', progress: 9, maxProgress: 10, completed: false, isFailed: false, active: true },
    { id: 'p1', title: 'E-Commerce Limit', description: 'Keep online shopping under RM 300 this month.', difficulty: 'hard', type: 'penalty', reward: 20, penalty: 30, icon: '🛍️', progress: 250, maxProgress: 300, completed: false, isFailed: false, active: true },
    { id: 'p2', title: 'Late-Night Cravings', description: 'Keep food deliveries between 12AM-6AM under 3 times this month.', difficulty: 'medium', type: 'penalty', reward: 15, penalty: 20, icon: '🌙', progress: 2, maxProgress: 3, completed: false, isFailed: false, active: true }
  ]);

  // Utils
  const addLog = (message, type) => {
    const newLog = { time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }), message, type };
    setLogs(prevLogs => [newLog, ...prevLogs].slice(0, 6));
  };

  // Simulation: Micro-Saver
  const handleSimulateCoffee = () => {
    const spend = 12.40, save = 0.60; 
    if (balance < 13) return alert("Insufficient funds");
    setBalance(prev => prev - 13); 
    setPocketBalance(prev => prev + save);
    
    let questCompleted = false;
    let rewardAmount = 0;

    const updatedChallenges = challenges.map(c => {
      if (c.id === 'r1' && c.active && !c.completed) {
        const newProgress = Math.min(c.progress + 1, c.maxProgress);
        if (newProgress === c.maxProgress) {
          questCompleted = true;
          rewardAmount = c.reward;
          return { ...c, progress: newProgress, completed: true, active: false };
        }
        return { ...c, progress: newProgress };
      }
      return c;
    });

    setChallenges(updatedChallenges);

    if (questCompleted) {
      setResilienceScore(s => Math.min(100, s + rewardAmount));
      addLog(`✨ Reward Earned! Micro-Saver complete (+${rewardAmount} pts).`, 'positive');
    } else {
      addLog(`💳 Transacted RM${spend.toFixed(2)}. Auto-saved RM${save.toFixed(2)}.`, 'neutral');
    }
    setIsSimulatorOpen(false);
  };

  // Simulation: Pocket Fund
  const handleSimulateTransfer = () => {
    const transferAmount = 100.00;
    if (balance < transferAmount) return alert("Insufficient funds");
    setBalance(prev => prev - transferAmount); 
    setPocketBalance(prev => prev + transferAmount);

    let questCompleted = false;
    let rewardAmount = 0;

    const updatedChallenges = challenges.map(c => {
      if (c.id === 'r2' && c.active && !c.completed) {
        const newProgress = Math.min(c.progress + transferAmount, c.maxProgress);
        if (newProgress >= c.maxProgress) {
          questCompleted = true;
          rewardAmount = c.reward;
          return { ...c, progress: newProgress, completed: true, active: false };
        }
        return { ...c, progress: newProgress };
      }
      return c;
    });

    setChallenges(updatedChallenges);

    if (questCompleted) {
      setResilienceScore(s => Math.min(100, s + rewardAmount));
      addLog(`✨ Reward Earned! Pocket Fund complete (+${rewardAmount} pts).`, 'positive');
    } else {
      addLog(`💰 Transferred RM${transferAmount.toFixed(2)} to Pocket.`, 'neutral');
    }
    setIsSimulatorOpen(false);
  };

  // Simulation: Essential Spender
  const handleSimulateGrocery = () => {
    const spend = 50.00;
    if (balance < spend) return alert("Insufficient funds");
    setBalance(prev => prev - spend);

    let questCompleted = false;
    let rewardAmount = 0;

    const updatedChallenges = challenges.map(c => {
      if (c.id === 'r3' && c.active && !c.completed) {
        const newProgress = Math.min(c.progress + 1, c.maxProgress);
        if (newProgress >= c.maxProgress) {
          questCompleted = true;
          rewardAmount = c.reward;
          return { ...c, progress: newProgress, completed: true, active: false };
        }
        return { ...c, progress: newProgress };
      }
      return c;
    });

    setChallenges(updatedChallenges);

    if (questCompleted) {
      setResilienceScore(s => Math.min(100, s + rewardAmount));
      addLog(`✨ Reward Earned! Essential Spender complete (+${rewardAmount} pts).`, 'positive');
    } else {
      addLog(`🛒 Grocery spend detected: RM${spend.toFixed(2)}.`, 'neutral');
    }
    setIsSimulatorOpen(false);
  };

  // Simulation: E-Commerce Limit
  const handleSimulateOnlineShopping = () => {
    const spend = 100.00;
    if (balance < spend) return alert("Insufficient funds");
    setBalance(prev => prev - spend);

    let questFailed = false;
    let penaltyAmount = 0;

    const updatedChallenges = challenges.map(c => {
      if (c.id === 'p1' && c.active && !c.isFailed) {
        const newProgress = Math.min(c.progress + spend, c.maxProgress);
        if (newProgress >= c.maxProgress) {
          questFailed = true;
          penaltyAmount = c.penalty;
          return { ...c, progress: newProgress, isFailed: true, active: false };
        }
        return { ...c, progress: newProgress };
      }
      return c;
    });

    setChallenges(updatedChallenges);

    if (questFailed) {
      setResilienceScore(s => Math.max(0, s - penaltyAmount)); 
      addLog(`🚨 Budget Breached! E-Commerce limit exceeded (-${penaltyAmount} pts).`, 'negative');
    } else {
      addLog(`🛍️ E-Commerce spend detected: RM${spend.toFixed(2)}.`, 'neutral');
    }
    setIsSimulatorOpen(false);
  };

  // Simulation: Late-Night Limit
  const handleSimulateLateNightFood = () => {
    const spend = 35.00;
    if (balance < spend) return alert("Insufficient funds");
    setBalance(prev => prev - spend);

    let questFailed = false;
    let penaltyAmount = 0;

    const updatedChallenges = challenges.map(c => {
      if (c.id === 'p2' && c.active && !c.isFailed) {
        const newProgress = Math.min(c.progress + 1, c.maxProgress);
        if (newProgress >= c.maxProgress) {
          questFailed = true;
          penaltyAmount = c.penalty;
          return { ...c, progress: newProgress, isFailed: true, active: false };
        }
        return { ...c, progress: newProgress };
      }
      return c;
    });

    setChallenges(updatedChallenges);

    if (questFailed) {
      setResilienceScore(s => Math.max(0, s - penaltyAmount)); 
      addLog(`🚨 Budget Breached! Late-Night limit exceeded (-${penaltyAmount} pts).`, 'negative');
    } else {
      addLog(`🌙 Late-night delivery detected: RM${spend.toFixed(2)}.`, 'neutral');
    }
    setIsSimulatorOpen(false);
  };

  // Simulation: Month End
  const handleMonthEnd = () => {
    let earnedPoints = 0;
    let newLogs = [];

    const updatedChallenges = challenges.map(c => {
      if (c.active) {
        if (c.type === 'penalty' && !c.isFailed) {
          earnedPoints += c.reward;
          newLogs.push({ msg: `🎉 Month End: Passed '${c.title}' limit! (+${c.reward} pts).`, type: 'positive' });
          return { ...c, completed: true, active: false };
        } else if (c.type === 'reward' && !c.completed) {
          newLogs.push({ msg: `⏳ Month End: '${c.title}' expired incomplete.`, type: 'neutral' });
          return { ...c, isFailed: true, active: false };
        }
      }
      return c;
    });

    setChallenges(updatedChallenges);

    if (earnedPoints > 0) {
      setResilienceScore(s => Math.min(100, s + earnedPoints));
    }
    
    if (newLogs.length > 0) {
      setLogs(prevLogs => {
        const logsToAdd = newLogs.map(log => ({
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }), 
          message: log.msg, 
          type: log.type 
        })).reverse(); 
        return [...logsToAdd, ...prevLogs].slice(0, 6);
      });
    }
    
    setIsSimulatorOpen(false);
  };

  // Filter Tasks
  const displayChallenges = challenges.filter(c => {
    if (selectedFilter === 'active') return c.active;
    if (selectedFilter === 'done') return c.completed || c.isFailed;
    return true; 
  });

  return (
    <div className={styles.pageContainer}>
      
      {/* Header */}
      <header className={styles.header}>
        <div>
          <h2>Challenges</h2>
          <p>Level up your financial resilience</p>
        </div>
      </header>

      {/* Summary Card */}
      <section className={styles.summaryCard}>
        <div className={styles.summaryTop}>
          <div>
            <p>Account Overview</p>
            <h3>GX-Avatar</h3>
          </div>
          <div className={styles.gxWatermark}>GX</div>
        </div>

        <div className={styles.summaryGrid}>
          <div>
            <p>Main Account</p>
            <strong>RM {balance.toFixed(2)}</strong>
          </div>
          <div>
            <p>Savings Pocket</p>
            <strong style={{ color: '#34d399' }}>RM {pocketBalance.toFixed(2)}</strong>
          </div>
        </div>
      </section>

      {/* Hero Panel */}
      <section className={styles.heroSection}>
        {/* Avatar Panel with Interaction */}
        <div className={`${styles.avatarPanel} ${styles[`panel_${avatarState}`]}`}>
          <div 
            className={`${styles.petContainer} ${isPoked ? styles.isPoked : ''}`} 
            onClick={handlePetClick}
            title="Poke me!"
          >
            <div className={styles.speechBubble}>
              {currentSpeech}
            </div>
            
            <div className={`${styles.petHologram} ${styles[avatarState]}`}>
              <div className={styles.petCore}>
                {avatarState === 'max' && <span className={styles.petFace}>✨ ˶ˆᗜˆ˵ ✨</span>}
                {avatarState === 'happy' && <span className={styles.petFace}>( ˶ˆᗜˆ˵ )</span>}
                {avatarState === 'neutral' && <span className={styles.petFace}>( • ᴖ • )</span>}
                {avatarState === 'calm' && <span className={styles.petFace}>( - _ - )</span>}
                {avatarState === 'warning' && <span className={styles.petFace}>💧 ( 》_《 ) 💧</span>}
              </div>
              <div className={styles.petShadow}></div>
            </div>
          </div>
        </div>

        {/* Interest Dashboard */}
        <div className={styles.interestPanel}>
          <h3 className={styles.panelTitle}>Current Dynamic Interest (p.a.)</h3>
          <div className={styles.interestRateDisplay}>
            {totalRate.toFixed(2)}<span className={styles.percent}>%</span>
          </div>
          <div className={styles.interestBreakdown}>
            <span>Base Rate: {baseRate.toFixed(2)}%</span>
            <span className={styles.bonusRate}>+ Challenge Bonus: {currentBonusRate.toFixed(2)}%</span>
          </div>
          <div className={styles.scoreBarContainer}>
            <div className={styles.scoreLabel}>
              <span>Financial Resilience Score</span>
              <strong>{resilienceScore} / 100</strong>
            </div>
            <div className={styles.progressBar}>
              <div 
                className={styles.progressFill} 
                style={{ width: `${resilienceScore}%` }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges Dashboard */}
      <section className={styles.challengesSection}>
        <div className={styles.sectionHeader}>
          <div className={styles.sectionHeaderTitleGroup}>
            <h2>🎯 Monthly Challenges</h2>
            <div className={styles.infoBadge} title="Progress is tracked via your transactions automatically.">
              ⓘ Auto-Tracked
            </div>
          </div>
          <div className={styles.filterTabs}>
            <button className={`${styles.filterBtn} ${selectedFilter === 'all' ? styles.activeTab : ''}`} onClick={() => setSelectedFilter('all')}>All</button>
            <button className={`${styles.filterBtn} ${selectedFilter === 'active' ? styles.activeTab : ''}`} onClick={() => setSelectedFilter('active')}>Active</button>
            <button className={`${styles.filterBtn} ${selectedFilter === 'done' ? styles.activeTab : ''}`} onClick={() => setSelectedFilter('done')}>Done</button>
          </div>
        </div>

        <div className={styles.challengesGrid}>
          {displayChallenges.length === 0 ? (
             <div className={styles.emptyState}>No quests matching this filter.</div>
          ) : (
            displayChallenges.map(challenge => (
              <div key={challenge.id} className={`${styles.challengeCard} ${challenge.type === 'penalty' ? styles.penaltyCard : ''}`}>
                <div className={styles.cardHeader}>
                  <div className={styles.iconWithTitle}>
                    <span className={styles.challengeIcon}>{challenge.icon}</span>
                    <div className={styles.cardTitleInfo}>
                      <div className={styles.titleRow}>
                        <h3>{challenge.title}</h3>
                        <span className={`${styles.typeBadge} ${challenge.type === 'reward' ? styles.badgeReward : styles.badgePenalty}`}>
                          {challenge.type.toUpperCase()}
                        </span>
                      </div>
                      <p>{challenge.description}</p>
                    </div>
                  </div>
                </div>

                <div className={styles.cardBody}>
                  <div className={styles.progressSection}>
                    <div className={styles.progressLabel}>
                      <span>{challenge.type === 'penalty' ? 'Limit Used' : 'Progress'}</span>
                      <span className={styles.progressValue}>{challenge.progress} / {challenge.maxProgress}</span>
                    </div>
                    <div className={styles.progressBarBig}>
                      <div className={styles.progressFillBig} style={{ 
                        width: `${(challenge.progress / challenge.maxProgress) * 100}%`, 
                        backgroundColor: challenge.type === 'penalty' ? '#f87171' : '#7c31fe' 
                      }}></div>
                    </div>
                  </div>
                  
                  <div className={styles.rewardSection}>
                    <div className={styles.rewardCol}>
                      <span className={styles.rewardLabel}>Pass Reward:</span>
                      <span className={styles.rewardValue}>+{challenge.reward} <span className={styles.rewardUnit}>pts</span></span>
                    </div>
                    {challenge.type === 'penalty' && (
                      <div className={styles.rewardCol}>
                        <span className={styles.rewardLabel}>Fail Penalty:</span>
                        <span className={styles.penaltyValue}>-{challenge.penalty} <span className={styles.rewardUnit}>pts</span></span>
                      </div>
                    )}
                  </div>
                </div>

                {/* State Status Badges */}
                {!challenge.active && (
                  <div className={styles.cardFooter}>
                    {challenge.completed && (
                      <div className={styles.completedBadge}>
                        <span>{challenge.type === 'reward' ? '🎉 Target Reached!' : '🎉 Month Survived!'} (+{challenge.reward})</span>
                      </div>
                    )}
                    {challenge.isFailed && (
                      <div className={styles.failedBadge}>
                        <span>{challenge.type === 'reward' ? '⏳ Expired Incomplete' : '❌ Limit Breached!'} ({challenge.type === 'reward' ? '0' : `-${challenge.penalty}`})</span>
                      </div>
                    )}
                  </div>
                )}
                
                {challenge.active && (
                  <div className={styles.cardFooter}>
                    <div className={styles.autoTrackStatus}>
                      <span className={styles.loadingSpinner}></span>
                      System Auto-Tracking...
                    </div>
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </section>

      {/* Activity Logs */}
      <section className={styles.activityLog}>
        <h3 className={styles.logTitle}>📋 Activity Log</h3>
        <ul className={styles.logList}>
          {logs.map((log, index) => (
            <li key={index} className={`${styles.logItem} ${styles[`log${log.type}`]}`}>
              <div className={styles.logIndicator}></div>
              <div className={styles.logContent}>
                <span className={styles.logTime}>{log.time}</span>
                <span className={styles.logMessage}>{log.message}</span>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Simulators */}
      <button className={styles.fab} onClick={() => setIsSimulatorOpen(true)} title="Open Simulators">?</button>

      {isSimulatorOpen && (
        <div className={styles.modalOverlay} onClick={() => setIsSimulatorOpen(false)}>
          <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <h3>⚙️ Dev Console (Simulate Transactions)</h3>
              <button className={styles.closeBtn} onClick={() => setIsSimulatorOpen(false)}>×</button>
            </div>
            <p className={styles.modalDesc}>Inject transactions to see the AI Auto-Tracking update the progress bars instantly.</p>
            
            <div className={styles.simulatorActions}>
              <button className={styles.btnSimulateGood} onClick={handleSimulateCoffee}>
                🪙 Pay with GX Card (+1 Micro-Saving)
              </button>
              <button className={styles.btnSimulateGood} onClick={handleSimulateTransfer}>
                🎯 Transfer to Pocket (+RM100 Pocket Fund)
              </button>
              <button className={styles.btnSimulateGood} onClick={handleSimulateGrocery}>
                🛒 Groceries (+1 Essential Spender)
              </button>
              <button className={styles.btnSimulateBad} onClick={handleSimulateOnlineShopping}>
                🛍️ Online Shopping (Adds RM100 to E-Commerce Limit)
              </button>
              <button className={styles.btnSimulateBad} onClick={handleSimulateLateNightFood}>
                🌙 Late Night GrabFood (+1 Late-Night Cravings)
              </button>
              <button className={styles.btnGodModeNeutral} onClick={handleMonthEnd}>
                📅 Simulate End of Month (Evaluate all quests)
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}